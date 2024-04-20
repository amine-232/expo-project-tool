import React from "react";
import { View, Text, Pressable } from "react-native";
import { useHover } from "react-native-web-hooks";

const TextHayper = ({ onPress, title }) => {
  const ref = React.useRef(null);
  const isHovered = useHover(ref);

  return (
    <View
      style={{
        width: "auto",
        height: "auto",
        alignSelf: "center",
        padding: 10,
      }}
    >
      <Pressable
        ref={ref}
        onPress={onPress}
        style={{ width: "auto", height: "auto", userSelect: "none" }}
      >
        <Text
          style={{
            textDecorationLine: isHovered ? "underline" : "none",
            color: isHovered ? "#0E86D4" : "#003060",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default TextHayper;
