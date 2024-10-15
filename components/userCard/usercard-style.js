import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
    flexDirection: "row",
    gap: 10,
    marginBottom: 0.5,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: SIZES.medium,
  },
  infoWrapper: {
    justifyContent: "center",
    gap: 2,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  caption: {
    fontSize: 15,
    color: COLORS.gray,
  },
  followBtn: {
    padding: 4,
    width: 60,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.xSmall,
  },
  unfollowBtn: {
    width: 80,
    backgroundColor: COLORS.deepWhite,
  },
  btnText: {
    textAlign: "center",
    fontSize: 14,
    color: COLORS.white,
  },
  inverseBtnTxt: {
    textAlign: "center",
    fontSize: 14,
    color: COLORS.deepPrimary,
  },
});

export default styles;
