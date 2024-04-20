import {} from "expo-status-bar";
import { Text, View } from "react-native";
import Navigation from "./src/Navigation/Routes/Navigation";

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <Navigation />
    </View>
  );
}
