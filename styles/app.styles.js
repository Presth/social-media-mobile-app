import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: 5,
    flexDirection: "column",
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    minHeight: 250,
    maxHeight: "70%",
    marginVertical: SIZES.small,
    borderRadius: SIZES.small,
    paddingVertical: SIZES.small,
    padding: SIZES.medium,
  },
  postImgWrapper: {
    flex: 1,
    minHeight: 200,
    maxHeight: "50%",
    marginBottom: SIZES.xSmall,
  },
  actionBtnContainer: {
    flex: 1,
  },
  postImg: {
    height: "100%",
  },
  postInput: {
    fontSize: 18,
    lineHeight: SIZES.medium,
  },
  addImgBtn: {
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.deepWhite,
    marginBottom: SIZES.small,
  },
  addImgBtnText: {
    color: COLORS.deepPrimary,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  postBtn: {
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.deepPrimary,
  },
  postBtnText: {
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  uploadBtnContainer: {
    maxHeight: "50%",
  },
});

export default styles;
