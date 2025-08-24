import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 หน้าหลัก Home</Text>

      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
          color="#4CAF50"
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
          color="#2196F3"
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Count"
          onPress={() => navigation.navigate("Count")}
          color="#FF9800"
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Go to StyleSheet"
          onPress={() => navigation.navigate("StyleSheet")}
          color="#9C27B0"
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Flex-example"
          onPress={() => navigation.navigate("Flex-example")}
          color="#F44336"
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Layout"
          onPress={() => navigation.navigate("Layout")}
          color="#795548"
        />
      </View>

      {/* 🔹 ปุ่มใหม่สำหรับไปหน้า LoginScreen */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
          color="#000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 25,
    fontWeight: "bold",
    color: "#333",
  },
  buttonWrapper: {
    width: "80%",
    marginVertical: 6,
    borderRadius: 10,
    overflow: "hidden",
  },
});
