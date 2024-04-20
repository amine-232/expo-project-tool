import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import TabBarr from "../../Component/TabBarr/TabBarr";
import ToolBar from "./compenent/ToolBar";
import { policiesBooks } from "../../utils/Utils";
import CostumeBtn from "../../Component/CostumeBtn";
import ContentScreen from "./compenent/ContentScreen";
import RenderActtion from "./compenent/RenderActtion";

const ActionScreen = () => {
  return (
    <View style={{ width: "100%", height: "100%", flexDirection: "column" }}>
      <ToolBar />

      <View style={{ width: "100%", height: "100%", flexDirection: "row" }}>
        <RenderActtion />
        <View
          style={{
            width: "80%",
            height: "100%",
            flexDirection: "row",
            borderColor: "black",
            borderWidth: 1,
          }}
        >
          <ContentScreen />
        </View>
      </View>
    </View>
  );
};

export default ActionScreen;
