import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import TabRoutes from "../../Navigation/TabNavigations/TabRoutes";
import TabBarr from "../../Navigation/TabNavigations/TabBarr";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        flexDirection: "column",
      }}
    >
      <TabBarr />
      <TabRoutes />
    </SafeAreaView>
  );
};

export default HomeScreen;
