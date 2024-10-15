import React from "react";
import { View, Modal, TouchableOpacity, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import modalStyles from "./modal.styles";

function AttachFile({
  modalVisible,
  setModalVisible,
  useCamera,
  chooseFromGallery,
}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <TouchableOpacity
              style={modalStyles.postBtn}
              onPress={() => useCamera()}
            >
              <Text style={modalStyles.postBtnText}>
                <FontAwesome name="camera" size={20} />
                {"  "}Take Picture
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={modalStyles.postBtn}
              onPress={chooseFromGallery}
            >
              <Text style={modalStyles.postBtnText}>
                <FontAwesome name="files-o" size={20} /> {"  "}Upload from
                device
              </Text>
            </TouchableOpacity>
            <Pressable
              style={modalStyles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalStyles.btnCloseText}>Dismiss</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AttachFile;
