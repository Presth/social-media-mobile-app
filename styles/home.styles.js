import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  bgImg: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    width: "90%",
    margin: "auto",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "10%",
  },
  titleHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.white,
    fontFamily: "SpaceMono",
  },
  btnContainer: {
    width: "90%",
    maxWidth: "400px",
    margin: "auto",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: "5%",
  },
  btn: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.deepPrimary,
    paddingVertical: SIZES.medium,
    borderRadius: 8,
    backgroundColor: COLORS.deepPrimary,
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "bold",
  },
  inverseBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.deepPrimary,
    paddingVertical: SIZES.medium,
    borderRadius: 8,
  },
  inverseBtnText: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.deepPrimary,
    fontWeight: "bold",
  },
});

export default styles;
