import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@/constants/theme";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#111b",
  },
  modalView: {
    flexDirection: "column",
    gap: SIZES.small,
    backgroundColor: COLORS.deepWhite,
    borderTopLeftRadius: SIZES.xxLarge,
    borderTopRightRadius: SIZES.xxLarge,
    padding: SIZES.large,
    shadowColor: COLORS.tertiary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    height: "40%",
  },
  buttonClose: {
    backgroundColor: COLORS.deepWhite,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  btnCloseText: {
    color: COLORS.deepPrimary,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
    marginLeft: 4,
  },
});

export default styles;
