import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  postWrapper: {
    padding: SIZES.medium,
    marginBottom: 5,
    backgroundColor: COLORS.lightWhite,
  },
  creatorWrapper: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
  },
  creatorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  creator: {
    fontSize: SIZES.medium,
    fontFamily: "DMMedium",
    paddingVertical: SIZES.small,
    marginLeft: SIZES.xSmall,
  },
  postImgContainer: {
    overflow: "hidden",
    position: "relative",
    backgroundColor: COLORS.white,
  },
  postImg: {
    width: "100%",
    minHeight: 350,
  },
  postContent: {
    color: COLORS.deepPrimary,
    fontFamily: "DMRegular",
    fontSize: SIZES.medium,
    paddingVertical: SIZES.medium,
  },
  postLike: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: COLORS.tertiary,
  },
  reactionBtnWrapper: {
    width: "100%",
    flexDirection: "row",
  },
  reactionBtn: {
    paddingVertical: SIZES.small,
    flex: 1,
    backgroundColor: "transparent",
  },

  btnText: {
    textAlign: "center",
    fontSize: 20,
    color: COLORS.tertiary,
  },
});

export default styles;
