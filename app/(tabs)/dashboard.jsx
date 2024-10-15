import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import { COLORS } from "@/constants/theme";
import HeaderTag from "@/components/header";
import SearchBox from "@/components/searchBar";
import Posts from "../../components/posts";

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar style="auto" translucent={false} />
      <View
        style={{
          flex: 1,
        }}
      >
        <HeaderTag />
        <SearchBox />
        <Posts />
      </View>
    </SafeAreaView>
  );
};

export default Index;
