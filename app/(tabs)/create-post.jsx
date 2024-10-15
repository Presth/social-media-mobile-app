import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import styles from "@/styles/app.styles";
import { Stack, router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import BackBtn from "@/components/customBackBtn";
import { apiBaseUrl } from "@/constants/api";
import AttachFile from "@/components/attachFile";
const CreatePost = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const useCamera = async () => {
    const imageSelected = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!imageSelected.canceled) {
      setImage(imageSelected.assets[0]);
      setModalVisible(false);
    }
  };

  const chooseFromGallery = async () => {
    const imageSelected = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!imageSelected.canceled) {
      setImage(imageSelected.assets[0]);
      setModalVisible(false);
    }
  };

  const uploadPost = async () => {
    try {
      const formData = new FormData();

      formData.append("file", {
        name: image.fileName,
        uri: image.uri,
        type: image.mimeType,
      });
      formData.append("content", postContent);
      const response = await fetch(`${apiBaseUrl}/upload`, {
        method: "POST",
        body: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const response_data = await response.json();
      if (response_data?.success) {
        setIsloading(false);
        return router.replace("/dashboard");
      }

      alert("Error uploading your post " + response_data.message);
      setIsloading(false);
    } catch (err) {
      alert(err.message);
      setIsloading(false);
    }
  };

  const discardPost = () => {
    setImage("");
    setPostContent("");
    setIsloading(false);
    router.push("/dashboard");
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Create Post",
          headerShown: true,
          headerLeft: () => <BackBtn />,
          headerRight: () => (
            <TouchableOpacity onPress={discardPost}>
              <Text style={styles.addImgBtnText}>Discard Post </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="What's on your mind"
            style={styles.postInput}
            multiline
            onChangeText={setPostContent}
          />
        </View>
        {image === "" ? (
          <></>
        ) : (
          <View style={styles.postImgWrapper}>
            <Image
              source={{
                uri: image.uri,
              }}
              style={styles.postImg}
              resizeMethod="contain"
            />
          </View>
        )}

        <View style={styles.actionBtnContainer}>
          <TouchableOpacity
            style={styles.addImgBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addImgBtnText}> Add Image </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {isLoading ? (
            <TouchableOpacity style={styles.addImgBtn} disabled={true}>
              <ActivityIndicator />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.postBtn}
              onPress={() => {
                setIsloading(true);
                uploadPost();
              }}
            >
              <Text style={styles.postBtnText}> Post Now </Text>
            </TouchableOpacity>
          )}
          {/* <TouchableOpacity
            style={styles.postBtn}
            onPress={() => {
              setIsloading(true);
              uploadPost();
            }}
          >
            <Text style={styles.postBtnText}> Post Now </Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <AttachFile
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        useCamera={useCamera}
        chooseFromGallery={chooseFromGallery}
      />
    </ScrollView>
  );
};

export default CreatePost;
