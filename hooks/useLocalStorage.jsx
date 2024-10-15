import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useLocalStorage(key) {
  const [item, setItem] = useState("");

  const getStoredData = async () => {
    try {
      const val = await AsyncStorage.getItem(key);
      if (val) setItem(val);
      setItem(val);
    } catch (e) {
      setItem("");
    }
  };

  useEffect(() => {
    getStoredData();
  });

  const setItemAsync = async (value) => {
    try {
      await AsyncStorage.setItem(key, value);
      setItem(value);
    } catch (e) {
      // saving error
    }
  };

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // saving error
    }
  };

  return [item, setItemAsync, removeItem];
}

export default useLocalStorage;
