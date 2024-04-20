import React from "react";
import { View, Text, Pressable } from "react-native";
import ProfileSetting from "./ProfileSetting";
import SerachPopup from "./SerachPopup";
import PostPopup from "./PostPopup";
import AddPsotPopup from "./AddPsotPopup";

const PupUpScreen = ({ setPopup, popUp }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {popUp === "search" ? <SerachPopup popUp={popUp} /> : null}
      {(popUp === "profile") | (popUp === "post") | (popUp === "addPost") ? (
        <>
          <Pressable
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "gray",
              top: 0,
              opacity: 0.5,
              justifyContent: "space-around",
            }}
            onPress={() => setPopup(false)}
          />
          {popUp === "profile" ? <ProfileSetting /> : null}
          {popUp === "post" ? <PostPopup /> : null}
          {popUp === "addPost" ? <AddPsotPopup /> : null}
        </>
      ) : null}
    </View>
  );
};

export default PupUpScreen;
