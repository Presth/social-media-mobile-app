import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./usercard-style";
import { router } from "expo-router";
import { apiProfileLink } from "../../constants/api";

const UserCard = ({ user, followUser, followed }) => {
  const imageLink = `${apiProfileLink}${user.image}`;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/profile/${user.id}`)}
    >
      <Image
        source={
          user.image
            ? { uri: imageLink }
            : require("@/assets/images/placeholder-img.jpg")
        }
        style={styles.avatar}
        resizeMode="contain"
      />
      <View style={styles.infoWrapper}>
        <Text style={styles.userName}> {user.name} </Text>
        <Text style={styles.caption}> 10 mutual connection </Text>
        {followed ? (
          <TouchableOpacity
            style={[styles.followBtn, styles.unfollowBtn]}
            onPress={() => followUser(user.id)}
          >
            <Text style={[styles.btnText, styles.inverseBtnTxt]}>
              {" "}
              UnFollow{" "}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.followBtn}
            onPress={() => followUser(user.id)}
          >
            <Text style={styles.btnText}>Follow</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
