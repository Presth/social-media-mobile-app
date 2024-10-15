import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import styles from "./post-styles";
import { FontAwesome } from "@expo/vector-icons";
import { apiPublicAssetLink } from "@/constants/api";
import { apiProfileLink } from "../../constants/api";
import { router } from "expo-router";

const PostBrief = ({ post, likePost, setPostToComment }) => {
  let postImgLink = apiPublicAssetLink + post.attachment;
  let likesCount = post.likes ? post.likes.length : 0;
  let creatorImgLink = `${apiProfileLink}${post.image}`;
  return (
    <View style={styles.postWrapper}>
      <Pressable
        style={styles.creatorWrapper}
        onPress={() => router.push(`/profile/${post.posted_by}`)}
      >
        <Image
          source={
            post.image
              ? { uri: creatorImgLink }
              : require("@/assets/images/avatar.jpg")
          }
          width={"100%"}
          style={styles.creatorAvatar}
        />
        <Text style={styles.creator}>{post.creator} </Text>
      </Pressable>
      <View>
        <Text style={styles.postContent} numberOfLines={2}>
          {post.content}
        </Text>
      </View>
      <View style={styles.postImgContainer}>
        <Image
          source={{ uri: postImgLink }}
          style={styles.postImg}
          resizeMode="contain"
        />
        <Text style={styles.postLike}>{likesCount} likes </Text>
      </View>
      <View>
        <View style={styles.reactionBtnWrapper}>
          <TouchableOpacity
            style={styles.reactionBtn}
            onPress={() => likePost(post._id)}
          >
            <FontAwesome name="heart-o" size={20} style={styles.btnText} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.reactionBtn}
            onPress={() => setPostToComment(post._id)}
          >
            <FontAwesome name="comment-o" size={20} style={styles.btnText} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// const NetworkImg = (uri) => {
//   const [height, setHeight] = useState(0);
//   Image.getSize(uri, (width, height) => {});

//   return <Image source={{ uri }} style={{}} />;
// };

export default PostBrief;
