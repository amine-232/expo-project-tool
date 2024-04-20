import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./src/Screens/SignInScreen";
import Navigation from "./src/Navigation/Routes";

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Navigation />
    </View>
  );
}
