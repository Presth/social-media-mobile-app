import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  RefreshControl,
  View,
  Text,
} from "react-native";
import HeaderTag from "@/components/header";
import SearchBox from "@/components/searchBar";
import UserCard from "@/components/userCard";
import { COLORS } from "@/constants/theme";
import useFetch from "@/hooks/useFetch";
import { apiBaseUrl } from "@/constants/api";
import axios from "axios";
import { SIZES } from "../../constants/theme";

const Friends = () => {
  const [users, setUsers] = useState([]);
  const [usersFollowed, setUserFollowed] = useState([]);
  const { data, isLoading, refetch } = useFetch("/users");
  const [refreshing, setRefreshing] = useState(false);
  const requery = () => {
    refetch();
    setRefreshing(false);
  };

  const followUser = async (user_id) => {
    try {
      const response = await axios.post(
        `${apiBaseUrl}/users/${user_id}/follow`
      );
      if (response?.data.success) {
        const userfollowed = usersFollowed.find((user) => user === user_id);
        if (userfollowed) {
          let others = usersFollowed.filter((user) => user !== user_id);
          setUserFollowed(others);
        } else {
          let newUserfollowedList = [...usersFollowed, user_id];
          setUserFollowed(newUserfollowedList);
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const getUserFollowed = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/user/followings`);
      if (response?.data.success) {
        setUserFollowed(response?.data.followed);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setUsers(data?.users);
  }, [data]);

  useEffect(() => {
    getUserFollowed();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.lightWhite,
        flex: 1,
      }}
    >
      <StatusBar style="auto" translucent={false} />
      <View
        style={{
          flexDirection: "column",
          flex: 1,
        }}
      >
        <HeaderTag />
        <SearchBox />
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                requery();
              }}
            />
          }
        >
          {isLoading ? (
            <ActivityIndicator size={"large"} />
          ) : users && users.length > 0 ? (
            users.map((user) => (
              <UserCard
                user={user}
                key={user.id}
                followUser={followUser}
                followed={usersFollowed.find((follow) => follow === user.id)}
              />
            ))
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: SIZES.large,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.medium,
                  margin: "auto",
                }}
              >
                No User found for you to follow
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Friends;
