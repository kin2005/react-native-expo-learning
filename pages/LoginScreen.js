import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (username === "" || password === "") {
      Alert.alert("กรอกข้อมูลให้ครบ", "กรุณากรอก Username และ Password");
      return;
    }

    try {
      // เก็บ username ลง AsyncStorage
      await AsyncStorage.setItem("username", username);

      Alert.alert("เข้าสู่ระบบสำเร็จ", `ยินดีต้อนรับ ${username}`);
      navigation.navigate("Profile"); // ไปหน้า Home
    } catch (e) {
      console.log(e);
      Alert.alert("Error", "ไม่สามารถบันทึกข้อมูลได้");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔑 Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="เข้าสู่ระบบ" onPress={handleLogin} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
});
