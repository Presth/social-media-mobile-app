import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

import styles from "@/styles/auth.styles";
import { Stack, useRouter } from "expo-router";
import axios from "axios";
import { apiBaseUrl } from "@/constants/api";
import ActivityLoading from "@/components/loader";
import BackBtn from "@/components/customBackBtn";

const ChangePassword = () => {
  const router = useRouter();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const changePassword = async () => {
    if (oldPassword == "" || newPassword == "") {
      alert("Passwords cannot be empty");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords does not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${apiBaseUrl}/user/updatePassword`, {
        oldPassword,
        newPassword,
        confirmPassword,
      });

      alert(response.data.message);

      if (response?.data.success) {
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        router.push("/profile/user");
      }
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      <Stack.Screen
        options={{
          headerTitle: "Change Password",
          headerLeft: () => <BackBtn />,
        }}
      />
      <View style={styles.imgContainer}>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={styles.logoImg}
        />
        <Text style={styles.authHeading}> Change Password </Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Old Password"
          value={oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry={showPassword}
        />
        <TextInput
          style={styles.textInput}
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={showPassword}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Pressable
          style={{ flexDirection: "row" }}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        >
          <View
            style={{
              width: 15,
              height: 15,
              borderWidth: 1,
              borderColor: "#111",
              outlineOffset: 4,
              borderRadius: 5,
              marginRight: 10,
              backgroundColor: showPassword ? "#e6f1f5" : "#095458",
            }}
          ></View>
          <Text style={{ marginVertical: "auto" }}> Show Password </Text>
        </Pressable>

        <TouchableOpacity
          style={styles.authBtn}
          onPress={() => changePassword()}
        >
          <Text style={styles.authBtnText}> Change Password</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "90%", marginBottom: 20 }}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.push("/profile/user")}
        >
          <Text style={styles.backBtnText}> Back to Profile </Text>
        </TouchableOpacity>
      </View>
      {isLoading ? <ActivityLoading /> : <></>}
    </SafeAreaView>
  );
};

export default ChangePassword;
