import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export default StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    backgroundColor: "#1118",
    height: "100%",
  },
  modalBox: {
    backgroundColor: COLORS.lightWhite,
    height: "70%",
    position: "relative",
  },
  header: {
    fontFamily: "DMBold",
    fontSize: 20,
    marginVertical: SIZES.large,
    marginHorizontal: SIZES.small,
  },
  commentContainer: {
    padding: SIZES.small,
    maxHeight: "70%",
  },
  comment: {
    backgroundColor: COLORS.deepWhite,
    padding: SIZES.small,
    borderRadius: SIZES.xSmall,
    marginBottom: SIZES.xSmall,
  },
  userContainer: {
    flexDirection: "row",
  },
  poster: {
    fontFamily: "DMMedium",
    marginVertical: "auto",
    paddingHorizontal: SIZES.xSmall,
  },
  inputWrapper: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    padding: SIZES.xSmall,
    backgroundColor: COLORS.white,
  },
  commentInput: {
    fontFamily: "DMRegular",
    fontSize: 18,
    flex: 1,
    borderRadius: 4,
    maxHeight: 150,
    padding: SIZES.xSmall,
  },
  sendBtn: {
    padding: SIZES.small,
  },
});
