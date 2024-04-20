import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  AuthContext,
  AuthProvider,
} from "../../Context/AuthContext/AuthContext";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import SignInScreen from "../../Screens/SignInScreen";
import LoadingScreen from "../../Screens/LoadingScreen/LoadingScreen";
import ActionScreen from "../../Screens/ActionScreen/ActionScreen";
import PoliciesScreen from "../../Screens/PoliciesScreen/PoliciesScreen";

const StackSRT = createNativeStackNavigator();

const toolStack = () => {
  return (
    <StackSRT.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"ActionScreen"} component={ActionScreen} />
      <Stack.Screen name={"PoliciesScreen"} component={PoliciesScreen} />
    </StackSRT.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { user, isLoading, setIsLoading } = useContext(AuthContext);

  const screenPath = [
    user
      ? { name: "Home", component: toolStack }
      : isLoading
      ? { name: "loading", component: LoadingScreen }
      : { name: "LoginScreen", component: SignInScreen },
  ];
  return (
    <Stack.Navigator
      initialRouteName="loading"
      screenOptions={{ headerShown: false }}
    >
      {screenPath.map((scr, index) => (
        <Stack.Screen key={index} name={scr.name} component={scr.component} />
      ))}
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <HomeStack />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Navigation;
