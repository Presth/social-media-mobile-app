import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  ActivityIndicator,
  Image,
  FlatList,
  RefreshControl,
  StyleSheet,
} from "react-native";

import { COLORS, SIZES } from "@/constants/theme";
import PostBrief from "@/components/postDesc";
import { apiBaseUrl } from "@/constants/api";
import CommentModal from "@/components/commentModal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
  },
  innerContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
});

function Posts({ personal }) {
  const [posts, setPosts] = useState([]);
  // const { data, error, isLoading, refetch } = useFetch("/posts/others");
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [postToCommentId, setPostToCommentId] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        personal ? `${apiBaseUrl}/posts` : `${apiBaseUrl}/posts/others`
      );
      setPosts(response?.data.posts);

      setIsLoading(false);
    } catch (err) {
      alert(err.message);
      setIsLoading(false);
    }
  };

  const refetch = async () => {
    setIsLoading(true);
    fetchPosts();
    setRefreshing(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchPosts();
  }, [personal]);

  const likePost = async (post_id) => {
    try {
      await axios.post(`${apiBaseUrl}/posts/${post_id}/like`);
    } catch (error) {
      alert(error.message);
    }
  };

  const setPostToComment = (post_id) => {
    setCommentModalVisible(true);
    setPostToCommentId(post_id);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.deepWhite }}>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : posts.length > 0 ? (
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return (
              <PostBrief
                post={item}
                likePost={likePost}
                setPostToComment={setPostToComment}
              />
            );
          }}
          keyExtractor={(post) => post._id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                refetch();
              }}
            />
          }
        />
      ) : (
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                refetch();
              }}
            />
          }
        >
          <View style={styles.innerContainer}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "DMRegular",
                fontSize: 20,
                maxWidth: 250,
                margin: "auto",
              }}
            >
              No post retrieved at the moment, connect with more people for more
              contents
            </Text>
          </View>
        </ScrollView>
      )}
      <CommentModal
        isModalVisible={commentModalVisible}
        closeCommentModal={setCommentModalVisible}
        post_id={postToCommentId}
      />
    </View>
  );
}

export default Posts;
