import React from "react";
import { View, Text } from "react-native";

const LoadingScreen = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "auto",
          height: "auto",
          alignSelf: "center",
        }}
      ></View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          fontFamily: "Arial",
          color: "black",
        }}
      >
        ....Loading
      </Text>
    </View>
  );
};

export default LoadingScreen;
