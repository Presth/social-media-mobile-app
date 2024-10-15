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

import { Stack, router, useLocalSearchParams } from "expo-router";
import BackBtn from "@/components/customBackBtn";

import styles from "@/styles/profile.styles";
import axios from "axios";
import { apiBaseUrl } from "@/constants/api";
import { apiProfileLink } from "@/constants/api";

const OthersProfile = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [followCount, setFollowCount] = useState({});

  const { id } = useLocalSearchParams();
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/user/profile/${id}`);
      if (response?.data.success) {
        setUserInfo(response?.data.userInfo);
        const followsC = await axios.get(
          `${apiBaseUrl}/user/followCount/${response?.data.userInfo.id}`
        );
        setFollowCount(followsC?.data);
      }
    } catch (error) {
      alert(error);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    fetchUserInfo();
  }, [id]);

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
        {userInfo.image ? (
          <UserImage img={`${apiProfileLink}${userInfo.image}`} />
        ) : (
          <Image
            source={require("@/assets/images/placeholder-img.jpg")}
            resizeMode="cover"
            style={styles.profileImg}
          />
        )}
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
      </ScrollView>
    </View>
  );
};

const UserImage = ({ img }) => {
  return <Image src={img} resizeMode="cover" style={styles.profileImg} />;
};

export default OthersProfile;
