import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

import { Stack, router } from "expo-router";
import BackBtn from "@/components/customBackBtn";
import styles from "@/styles/profile.styles";
import { apiBaseUrl } from "@/constants/api";
import AttachFile from "@/components/attachFile";
import uploadImage from "@/hooks/uploadImage";
import { apiProfileLink } from "@/constants/api";

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [followCount, setFollowCount] = useState({});
  const [modalVisible, setModalVisible] = useState({});
  const [image, setImage] = useState(""); //uploading image
  const [displayImage, setDisplayImage] = useState("");

  const useCamera = async () => {
    const imageSelected = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!imageSelected.canceled) {
      setImage(imageSelected.assets[0]);
      setModalVisible(false);
    }
  };

  const chooseFromGallery = async () => {
    const imageSelected = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      allowsMultipleSelection: false,
    });
    if (!imageSelected.canceled) {
      setImage(imageSelected.assets[0]);
      setModalVisible(false);
    }
  };

  const uploadPicture = async () => {
    if (image === "") return;
    const response = await uploadImage(image, `${apiBaseUrl}/user/picture`);
    if (response?.success) {
      setDisplayImage(image.uri);
      return;
    }
    alert("Error uploading your profile picture");
  };

  useEffect(() => {
    uploadPicture();
  }, [image]);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/user/profile`);

      if (response?.data.success) {
        let userData = response?.data.userInfo;
        setUserInfo(userData);
        const followsC = await axios.get(
          `${apiBaseUrl}/user/followCount/${response?.data.userInfo.id}`
        );
        setFollowCount(followsC?.data);

        if (userData.image) {
          setDisplayImage(`${apiProfileLink}${userData.image}`);
        }
      }
    } catch (error) {
      alert(error.message);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const logout = async () => {
    try {
      const logoutResp = await axios.post(`${apiBaseUrl}/auth/logout`);
      if (logoutResp?.data.message === "loggedout") {
        router.push("/signin");
        return;
      }
      alert("unable to logout");
    } catch (e) {
      alert(e.message);
    }
  };

  // {
  //   uri: "http://192.168.0.189:5000/profile/7e2aa993-5bee-425e-9191-fdb929ba521f.png",
  // }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Profile",
          headerShown: true,
          headerLeft: () => <BackBtn />,
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 15 }}
              onPress={() => router.push("/profile/edit")}
            >
              <FontAwesome name="pencil" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              fetchUserInfo();
            }}
          />
        }
      >
        <View style={styles.imgWrapper}>
          {displayImage && displayImage !== "" ? (
            <UserImage img={displayImage} />
          ) : (
            <Image
              source={require("@/assets/images/placeholder-img.jpg")}
              resizeMode="cover"
              style={styles.profileImg}
            />
          )}
          <TouchableOpacity
            style={styles.addImgBtn}
            onPress={() => setModalVisible(true)}
          >
            <FontAwesome name="camera" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoWrapper}>
          <Text style={styles.userName}> {userInfo.name || ""} </Text>
          <Text style={styles.userEmail}> {userInfo.email || ""} </Text>
        </View>
        <View style={styles.followWrapper}>
          <View style={styles.followDescLeft}>
            <Text style={styles.followCount}>{followCount.followers || 0}</Text>
            <Text style={styles.followTag}>Followers</Text>
          </View>
          <View style={styles.followDescRight}>
            <Text style={styles.followCount}>{followCount.following || 0}</Text>
            <Text style={styles.followTag}>Following</Text>
          </View>
        </View>

        <View style={[styles.followWrapper, styles.infoWrapper]}>
          <Text style={styles.infoHeader}> Personal Information </Text>
          <View style={styles.info}>
            <Text style={styles.infoTag}> Name </Text>
            <Text style={styles.infoValue} numberOfLines={1}>
              {userInfo.name || ""}
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.infoTag}> Email </Text>
            <Text style={styles.infoValue} numberOfLines={1}>
              {userInfo.email || ""}
            </Text>
          </View>

          <View
            style={[styles.info, { borderBottomWidth: 0, paddingBottom: 8 }]}
          >
            <Text style={styles.infoTag}> Phone </Text>
            <Text style={styles.infoValue} numberOfLines={1}>
              {userInfo.phone_no || "none"}
            </Text>
          </View>
        </View>

        <View style={[styles.followWrapper, styles.infoWrapper]}>
          <Text style={styles.infoHeader}> Settings </Text>

          <TouchableOpacity
            style={styles.info}
            onPress={() => router.push("/profile/changePassword")}
          >
            <Text style={styles.infoTag}> Change Password </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.info, { borderBottomWidth: 0, paddingBottom: 8 }]}
            onPress={logout}
          >
            <Text style={styles.infoTag}> Logout </Text>
          </TouchableOpacity>
        </View>

        <AttachFile
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          useCamera={useCamera}
          chooseFromGallery={chooseFromGallery}
        />
      </ScrollView>
    </View>
  );
};

const UserImage = ({ img }) => {
  return <Image src={img} resizeMode="cover" style={styles.profileImg} />;
};

export default Profile;
