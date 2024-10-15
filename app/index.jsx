import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ImageBackground,
  StatusBar,
} from "react-native";

import styles from "../styles/home.styles";
import { router } from "expo-router";

const App = () => {
  // const [userLoggedIn] = useLocalStorage("auth_token");

  // useEffect(() => {
  //   if (userLoggedIn && userLoggedIn !== "") {
  //     router.navigate("/dashboard");
  //   }
  // });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar color={"light-content"} />
      <ImageBackground
        source={require("../assets/images/chating.jpg")}
        style={styles.bgImg}
        resizeMode="cover"
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleHeader}>Welcome to Peaky Meetup </Text>
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={() => router.push("/signup")}>
            <Text style={styles.btnText}> Create Account </Text>
          </Pressable>
          <Pressable
            style={styles.inverseBtn}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.inverseBtnText}> Login </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
