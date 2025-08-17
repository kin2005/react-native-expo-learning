// ListManagerScreen.js
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ListManagerScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ecf0f1" }}>
      {/* ตัวเลข */}
      <Text style={{ fontSize: 48, fontWeight: "bold", color: "#2c3e50", marginBottom: 40 }}>
        {count}
      </Text>

      {/* ปุ่มลบ/บวก */}
      <View style={{ flexDirection: "row", marginBottom: 60 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#e74c3c",
            width: 70,
            height: 70,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            elevation: 4,
          }}
          onPress={decrement}
        >
          <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#2ecc71",
            width: 70,
            height: 70,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            elevation: 4,
          }}
          onPress={increment}
        >
          <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>+</Text>
        </TouchableOpacity>
      </View>

      {/* ปุ่มไปโฮม */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#3498db",
          paddingVertical: 14,
          paddingHorizontal: 30,
          borderRadius: 30,
          elevation: 4,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="home" size={22} color="white" style={{ marginRight: 10 }} />
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListManagerScreen;
