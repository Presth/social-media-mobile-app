import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/auth.styles";
import { Stack, useRouter } from "expo-router";
import axios from "axios";
import { apiBaseUrl } from "@/constants/api";
import useLocalStorage from "@/hooks/useLocalStorage";
import ActivityLoading from "@/components/loader";

const Signup = () => {
  const router = useRouter();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createAccount = async () => {
    if (password !== confirmPassword) {
      alert("Passwords does not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${apiBaseUrl}/auth/create-account`, {
        name: fullname,
        email,
        username,
        phoneNo,
        password,
      });

      if (response?.data.success) {
        router.push("/dashboard");
      } else {
        alert(response.data.message);
      }
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
        <Text style={styles.authHeading}>Create An Account </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={styles.captionText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text style={styles.linkBtn}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Fullname"
          value={fullname}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          value={phoneNo}
          onChangeText={setPhoneNo}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {/* <TextInput style={styles.textInput} placeholder="Username" /> */}
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.authBtn}
          onPress={() => createAccount()}
        >
          <Text style={styles.authBtnText}> Create Account </Text>
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

export default Signup;
