import { View, Text, Button } from "react-native";

export default function DatailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" , justifyContent: "center"}}>
      <Text>Details Screen</Text>
        <Button 
            title="Go go Home" 
            onPress={() => navigation.navigate("Home")} 
        />
        <Button
            title= "Go to Profile"
            onPress={() => navigation.navigate("Profile")}
        />
      </View>
  );
}
