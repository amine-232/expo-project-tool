import React from "react";
import { View, Text, Pressable } from "react-native";
import ProfileBtn from "./ProfileBtn";
import WorkState from "./WorkState";

const ProfileSetting = () => {
  const profileBtn = [
    {
      name: "account",
      onPress: () => console.log("accountBtn Pressed"),
      icon: "",
    },
    {
      name: "Setting",
      onPress: () => console.log("accountBtn Pressed"),
      icon: "",
    },
    {
      name: "Privacy",
      onPress: () => console.log("accountBtn Pressed"),
      icon: "",
    },
    {
      name: "Logout",
      onPress: () => console.log("accountBtn Pressed"),
      icon: "",
    },
  ];
  return (
    <View
      style={{
        position: "absolute",
        height: "auto",
        padding: 10,
        width: 280,
        height: "auto",
        flexDirection: "column",
        top: 44,
        right: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
      }}
    >
      <WorkState />
      {profileBtn.map((s, index) => (
        <ProfileBtn onPress={s.onPress} title={s.name} key={index} />
      ))}
    </View>
  );
};

export default ProfileSetting;
