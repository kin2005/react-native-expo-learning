import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import DatailsScreen from '../pages/DetailScreen';
import ProfileScreen from '../pages/ProfileScreen';
import CounterScreen from '../pages/CounterScreen';
import StyleSheet from "../pages/StyleSheet";

const Stack = createStackNavigator();

export default function navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DatailsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Count" component={CounterScreen} />
            <Stack.Screen name="StyleSheet" component={StyleSheet} />
        </Stack.Navigator>
    );
}