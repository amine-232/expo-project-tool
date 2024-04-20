import React from "react";
import { View, Text, Pressable, Image } from "react-native";

const StoryCard = ({ story }) => {
  return (
    <View
      style={{
        width: "auto",
        height: "auto",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "silver",
        zIndex: 0,
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          borderWidth: 1,
          borderColor: "silver",
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1,
        }}
      >
        <Image
          source={{ uri: story.profilePic }}
          style={{ width: "100%", height: "100%", borderRadius: 25 }}
          resizeMode={"cover"}
        />
      </View>
      <Pressable
        style={{
          width: 150,
          height: 300,
          overflow: "hidden",
          borderRadius: 10,
        }}
      >
        <Image
          source={{ uri: story.thumbnail }}
          style={{ width: "100%", height: "100%" }}
          resizeMode={"cover"}
        />
      </Pressable>
    </View>
  );
};

export default StoryCard;
