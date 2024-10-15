import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.small,
    height: 55,
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: COLORS.deepPrimary,
    fontWeight: "bold",
    paddingVertical: SIZES.small,
    width: "100%",
    height: "100%",
  },
  imgFlex: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imgContainer: {
    width: 35,
    height: 35,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 6,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
