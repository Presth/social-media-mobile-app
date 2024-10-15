import React, { useEffect, useState } from "react";
import {
  View,
  Modal,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

import { apiBaseUrl, apiProfileLink } from "@/constants/api";

const CommentModal = ({ isModalVisible, closeCommentModal, post_id }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  const postComment = async () => {
    if (!comment.length > 0) {
      alert("Comment box cant be empty");
      return;
    }

    try {
      const resp = await axios.post(`${apiBaseUrl}/posts/${post_id}/comment`, {
        comment,
      });
      if (resp?.data.success) {
        setComment("");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const getComments = async () => {
    if (!post_id) return;
    try {
      const response = await axios.get(
        `${apiBaseUrl}/posts/${post_id}/comments`
      );
      if (response?.data.comments) {
        setComments(response?.data.comments);
      }
      setRefreshing(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const refetchComments = () => {
    setRefreshing(true);
    getComments();
  };

  useEffect(() => {
    getComments();
  }, [post_id]);

  return (
    <View>
      <Modal transparent={true} animationType="slide" visible={isModalVisible}>
        <View style={styles.container}>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => closeCommentModal(false)}
          />
          <View style={styles.modalBox}>
            <Text style={styles.header}> Comments </Text>
            <ScrollView
              style={styles.commentContainer}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => refetchComments()}
                />
              }
            >
              {comments &&
                comments.map((comment) => (
                  <View style={styles.comment} key={Math.random()}>
                    <View style={styles.userContainer}>
                      <Image
                        src={
                          comment.userImg
                            ? `${apiProfileLink}${comment.userImg}`
                            : require("@/assets/images/placeholder-img.jpg")
                        }
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                        }}
                      />
                      <Text style={styles.poster}>{comment.posted_by}</Text>
                    </View>
                    <Text>{comment.comment}</Text>
                  </View>
                ))}
            </ScrollView>

            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Type your comment here"
                style={styles.commentInput}
                value={comment}
                onChangeText={setComment}
                multiline
              />
              <Pressable style={styles.sendBtn} onPress={() => postComment()}>
                <FontAwesome name="send" size={30} />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CommentModal;
