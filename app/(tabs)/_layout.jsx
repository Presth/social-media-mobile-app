import { Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import { COLORS, SIZES } from "../../constants/theme";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: COLORS.deepPrimary }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-posts"
        options={{
          headerShown: false,
          title: "My Posts",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          headerShown: false,
          title: "Friends",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="users" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-post"
        options={{
          headerShown: false,
          title: "Create Post",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/[id]"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="profile/user"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/edit"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile/changePassword"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
