import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import styles from "../styles/auth.styles";
import { router } from "expo-router";
import ActivityLoading from "../components/loader";
import { apiBaseUrl } from "../constants/api";
import CustomErrorModal from "../components/customErrorModal";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    try {
      const response = await axios.post(`${apiBaseUrl}/auth/login`, {
        email,
        password,
      });
      // const response = await executeQuery();

      if (response?.data.success) {
        return router.push("/dashboard");
      }

      alert(response?.data.message);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   if (userLoggedIn && userLoggedIn !== "") {
  //     router.navigate("/dashboard");
  //   }
  // });

  return (
    <SafeAreaView style={styles.authContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={styles.logoImg}
        />
        <Text style={styles.authHeading}>Welcome back</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.captionText}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={styles.linkBtn}> Create One </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity>
          <Text style={styles.forgotBtn}> Forgot Password? </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.authBtn}
          onPress={() => {
            setIsLoading(true);
            login();
          }}
        >
          <Text style={styles.authBtnText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "90%", marginBottom: 20 }}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.push("/")}
        >
          <Text style={styles.backBtnText}> Back Home </Text>
        </TouchableOpacity>
      </View>

      {isLoading ? <ActivityLoading /> : <></>}
    </SafeAreaView>
  );
};

export default SignIn;
