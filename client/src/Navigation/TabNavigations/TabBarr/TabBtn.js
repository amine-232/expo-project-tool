import React from "react";
import { View, Text, Pressable, Image } from "react-native";

const TabBtn = ({ icon, onPress, iconSize, iconColor }) => {
  return (
    <View style={{ width: "100%", height: "auto" }}>
      <Pressable
        style={{
          width: "100%",
          height: "auto",
          paddingVertical: 10,
          userSelect: "none",
        }}
        onPress={onPress}
      >
        <View style={{ width: "auto", height: "auto", alignSelf: "center" }}>
          <Image
            source={icon}
            style={{ width: iconSize, height: iconSize }}
            resizeMode={"contain"}
            tintColor={iconColor}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default TabBtn;
