import React from "react";
import { Text, ScrollView } from "react-native";
import CostumeBtn from "../Component/CostumeBtn";
import { LogOutFunction } from "../scripts/AuthFunctions";
import StreamCard from "./components/StreamCard";
import Stories from "./components/Stories";

const HomeTab = () => {
  return (
    <ScrollView
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "black",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text>HomeScreen</Text>
      <StreamCard />
      <Stories />
      <CostumeBtn
        title={"logout"}
        onPress={LogOutFunction}
        hoverColor={"#fff"}
        txtColor={"#fff"}
        txtHover={"black"}
      />
    </ScrollView>
  );
};

export default HomeTab;
