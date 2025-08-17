import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
  <View style={{ flex: 1, alignItems: "center" , justifyContent: "center"}}>
  <Text>หน้าหลัก home</Text>
  <Button
        title="go to Profile"
        onPress={() => navigation.navigate("Profile")}
        />

    <Button
      title="Go to Details"
      onPress={()=> navigation.navigate("Details")}
      />
      <Button
      title="Go to Count"
      onPress={()=> navigation.navigate("Count")}
      />
          <Button
      title="Go to StyleSheet"
      onPress={()=> navigation.navigate("StyleSheet")}
      />
       </View>
    );
}