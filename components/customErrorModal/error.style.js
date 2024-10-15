import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    backgroundColor: "white",
    minWidth: "50%",
    maxWidth: "80%",
    maxHeight: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.xLarge,
    borderRadius: SIZES.xLarge,
    elevation: 5,
  },
});
