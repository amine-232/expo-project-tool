import React, { useRef } from "react";
import { View, Text, Pressable } from "react-native";
import { useHover } from "react-native-web-hooks";

const CostumeBtn = ({
  title,
  onPress,
  txtColor,
  bckColor,
  hoverColor,
  txtHover,
  txtSize,
  brColor,
}) => {
  const ref = useRef(null);
  const isHovered = useHover(ref);
  return (
    <Pressable
      ref={ref}
      style={{
        width: "100%",
        height: "auto",
        padding: 5,
        backgroundColor: isHovered ? hoverColor : bckColor,
        borderColor: brColor ? brColor : "silver",
        borderWidth: 1,
        borderRadius: 5,
        userSelect: "none",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: "auto",
          height: "auto",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: txtSize ? txtSize : 20,
            fontWeight: 800,
            color: isHovered ? txtHover : txtColor,
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default CostumeBtn;
