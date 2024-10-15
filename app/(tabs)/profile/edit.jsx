import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

import { Stack, router } from "expo-router";
import BackBtn from "@/components/customBackBtn";
import styles from "@/styles/profile.styles";
import authStyles from "@/styles/auth.styles";
import { apiBaseUrl } from "@/constants/api";
import AttachFile from "@/components/attachFile";
import uploadImage from "@/hooks/uploadImage";
import { apiProfileLink } from "@/constants/api";

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState({});
  const [image, setImage] = useState(""); //uploading image
  const [displayImage, setDisplayImage] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

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

  const updateProfile = async () => {
    if (fullname === "" || email === "" || phone === "") {
      alert("All inputs required");
      return;
    }

    try {
      const response = await axios.post(`${apiBaseUrl}/user/profile/update`, {
        fullname,
        phone,
        email,
      });
      if (response?.data.success) {
        alert("Profile Update Successfully");
        router.replace("/profile/user");
        return;
      } else {
        alert(response?.data.message);
      }
    } catch (error) {
      alert("Error updating profile" + error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/user/profile`);

      if (response?.data.success) {
        let userData = response?.data.userInfo;
        setFullname(userData.name);
        setPhone(userData.phone_no);
        setEmail(userData.email);

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
          <Text style={styles.userName}> {fullname || ""} </Text>
          <Text style={styles.userEmail}> {email || ""} </Text>
        </View>

        <View style={[styles.followWrapper, styles.infoWrapper]}>
          <Text style={styles.infoHeader}> Editing Personal Information </Text>
          <View style={styles.info}>
            <Text style={styles.editTitle}> Name </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Fullname"
              value={fullname}
              onChangeText={setFullname}
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.editTitle}> Email Address </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={[styles.info, { borderBottomWidth: 0 }]}>
            <Text style={styles.editTitle}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <TouchableOpacity
            style={authStyles.authBtn}
            onPress={() => updateProfile()}
          >
            <Text style={authStyles.authBtnText}> Update Profile </Text>
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
