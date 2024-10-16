import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    flex: 1,
  },
  profileImg: {
    width: 180,
    height: 180,
    alignSelf: "center",
    borderRadius: 90,
    margin: SIZES.large,
    borderWidth: 6,
    borderColor: COLORS.deepWhite,
  },
  userInfoWrapper: {
    gap: SIZES.xSmall,
  },
  userName: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "DMMedium",
    color: COLORS.deepPrimary,
  },
  userEmail: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "DMRegular",
    color: COLORS.gray,
  },
  followWrapper: {
    flexDirection: "row",
    gap: 1,
    padding: 2,
    backgroundColor: COLORS.white,
    marginVertical: SIZES.medium,
    marginHorizontal: "10%",
    borderRadius: SIZES.xLarge,
  },
  followDescLeft: {
    flex: 1,
    padding: SIZES.large,
    backgroundColor: "white",
    borderTopLeftRadius: SIZES.xLarge,
    borderBottomLeftRadius: SIZES.xLarge,
  },
  followDescRight: {
    flex: 1,
    padding: SIZES.large,
    backgroundColor: "white",
    borderTopRightRadius: SIZES.xLarge,
    borderBottomRightRadius: SIZES.xLarge,
  },
  followTag: {
    textAlign: "center",
    fontSize: 20,
    color: COLORS.gray,
    fontFamily: "DMRegular",
  },
  followCount: {
    fontFamily: "DMMedium",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 5,
  },
  infoWrapper: {
    flexDirection: "column",
    gap: 1,
    padding: SIZES.medium,
    backgroundColor: "white",
    marginHorizontal: "5%",
    gap: SIZES.xLarge,
    elevation: 1,
  },
  infoHeader: {
    fontFamily: "DMMedium",
    fontSize: 20,
    color: COLORS.gray,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray2,
    paddingBottom: SIZES.xLarge,
  },
  info: {
    flexDirection: "row",
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: 0.5,
    paddingBottom: SIZES.medium,
  },
  infoTag: {
    fontFamily: "DMBold",
    flex: 1,
    fontSize: 16,
  },
  infoValue: {
    fontFamily: "DMRegular",
    textAlign: "right",
    fontSize: 16,
  },
  imgWrapper: {
    position: "relative",
  },
  addImgBtn: {
    backgroundColor: COLORS.white,
    position: "absolute",
    left: "52%",
    bottom: 0,
    padding: 10,
    borderRadius: SIZES.large,
  },
  editTitle: {
    width: "25%",
    marginVertical: "auto",
    fontFamily: "DMMedium",
    fontSize: 16,
  },
  textInput: {
    width: "75%",
    padding: SIZES.small,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    fontSize: 16,
  },
});
