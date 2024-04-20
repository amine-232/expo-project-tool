import React from "react";
import { View, Text, ScrollView } from "react-native";

/// sorry i forgot we are building a actioning system

///we going to leave this component and reuse them to review content such as image and Videos or live and also profile

const AddPsotPopup = () => {
  return (
    <View
      style={{
        width: "80%",
        height: "90%",
        backgroundColor: "#fff",
        borderRadius: 10,
        position: "absolute",
        alignSelf: "center",
        top: "5%",
      }}
    >
      <ScrollView
        style={{ height: "100%", width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <Text>AddPsotPopup</Text>
      </ScrollView>
    </View>
  );
};

export default AddPsotPopup;
