import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  authContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    backgroundColor: COLORS.deepWhite,
  },
  imgContainer: {
    gap: 20,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  logoImg: {
    width: 100,
    height: 100,
    marginHorizontal: "auto",
  },
  authHeading: {
    fontSize: 30,
    fontFamily: "DMMedium",
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  captionText: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: SIZES.large,
  },
  linkBtn: {
    color: COLORS.deepPrimary,
  },
  formContainer: {
    width: "90%",
    maxWidth: "400px",
    margin: "auto",
    flexGrow: 1,
    gap: 20,
  },
  textInput: {
    width: "100%",
    padding: SIZES.small,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    fontSize: 16,
  },
  authBtn: {
    width: "100%",
    padding: SIZES.medium,
    backgroundColor: COLORS.deepPrimary,
    borderRadius: 4,
    color: COLORS.white,
  },
  authBtnText: {
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  forgotBtn: {
    color: COLORS.gray,
    textAlign: "end",
    fontSize: 15,
  },
  backBtn: {
    width: "100%",
    padding: SIZES.medium,
    backgroundColor: COLORS.gray2,
    borderRadius: 4,
  },
  backBtnText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
