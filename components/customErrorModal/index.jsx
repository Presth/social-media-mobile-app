import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "./error.style";

function CustomErrorModal() {
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true}>
        <View style={styles.container}>
          <View style={styles.centerContent}>
            <Text> Hello World </Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default CustomErrorModal;
