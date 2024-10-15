// import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }) => ({
  ...config,
  plugins: [
    [
      "expo-font",
      {
        fonts: ["@/assets/fonts/DMSans-Bold.ttf"],
      },
    ],
  ],
});
