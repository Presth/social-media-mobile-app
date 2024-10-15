import { TextInput, TouchableOpacity, View, Image } from "react-native";
import styles from "./search-styles";

function SearchBox() {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput} placeholder="Search Here" />
      </View>
      <TouchableOpacity style={styles.searchBtn}>
        <Image
          source={require("../../assets/images/search.png")}
          style={styles.searchBtnImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBox;
