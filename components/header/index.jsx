import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./header-styles";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { apiBaseUrl, apiProfileLink } from "@/constants/api";

const HeaderTag = () => {
  const [profilePic, setProfilePic] = useState("");

  const getUserProfilePic = async () => {
    const response = await fetch(`${apiBaseUrl}/user/profile`);
    let data = await response.json();
    if (data?.success) {
      setProfilePic(`${apiProfileLink}${data.userInfo.image}`);
    }
  };

  useEffect(() => {
    getUserProfilePic();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Peaky Forum</Text>
      </View>
      <View style={styles.imgFlex}>
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => router.push("/profile/user")}
        >
          <Image
            source={
              profilePic !== ""
                ? { uri: profilePic }
                : require("@/assets/images/placeholder-img.jpg")
            }
            style={styles.avatar}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderTag;
