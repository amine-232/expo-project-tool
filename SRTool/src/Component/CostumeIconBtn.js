import React from "react";
import { View, Text, Pressable, Image } from "react-native";

const CostumeIconBtn = ({ radius, iconSize, icon, iconColor, onPress }) => {
  return (
    <Pressable
      style={{
        width: "auto",
        height: "auto",
        borderRadius: radius,
        overflow: "hidden",
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{ width: iconSize, height: iconSize }}
        resizeMode={"contain"}
        tintColor={iconColor}
      />
    </Pressable>
  );
};

export default CostumeIconBtn;
