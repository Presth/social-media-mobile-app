import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

function BackBtn() {
  return (
    <TouchableOpacity
      style={{ padding: 15 }}
      onPress={() => router.push("/dashboard")}
    >
      <FontAwesome name="chevron-left" />
    </TouchableOpacity>
  );
}

export default BackBtn;
