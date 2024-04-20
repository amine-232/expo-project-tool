import React, { useContext } from "react";
import { View, Text } from "react-native";
import CostumeBtn from "../../../Component/CostumeBtn";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { AddActivity } from "../../../scripts/AuthFunctions";

const ToolBar = () => {
  const navigation = useNavigation();
  const { userId } = useContext(AuthContext);

  const handeleExit = async () => {
    AddActivity("exit the quee", "exitQuee", userId);
    navigation.navigate("HomeScreen");
  };
  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        padding: 10,
        flexDirection: "row",
        backgroundColor: "silver",
        overflow: "hidden",
        paddingVertical: 10,
      }}
    >
      <View style={{ width: "9%" }}>
        <CostumeBtn
          title={"Exit"}
          bckColor={"#fff"}
          brColor={"black"}
          hoverColor={"black"}
          txtHover={"#fff"}
          txtSize={13}
          onPress={() => handeleExit()}
        />
      </View>
      <View style={{ width: "9%" }}>
        <CostumeBtn
          title={"Policies"}
          bckColor={"#fff"}
          brColor={"black"}
          hoverColor={"black"}
          txtHover={"#fff"}
          txtSize={13}
        />
      </View>
    </View>
  );
};

export default ToolBar;
