import React from "react";
import { ActivityIndicator, View } from "react-native";
import { COLORS } from "@/constants/theme";

import styles from "./loader.style";
function ActivityLoading() {
  return (
    <View style={styles.container}>
      <View>
        <ActivityIndicator size={"large"} color={COLORS.white} />
      </View>
    </View>
  );
}

export default ActivityLoading;
