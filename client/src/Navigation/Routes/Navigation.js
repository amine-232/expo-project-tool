import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  AuthContext,
  AuthProvider,
} from "../../Context/AuthContext/AuthContext";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import SignInScreen from "../../Screens/SignInScreen";
import SignUpScreen from "../../Screens/SignUpScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { user } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      {user ? (
        <Stack.Group
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
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
