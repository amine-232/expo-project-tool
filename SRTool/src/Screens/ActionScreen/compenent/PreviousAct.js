import React from "react";
import { View, Text } from "react-native";

const PreviousAct = ({ previousAction }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        flexDirection: "column",
      }}
    >
      {previousAction.map((per, index) => (
        <View
          style={{
            width: "100%",
            height: "auto",
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            flexDirection: "row",
          }}
          key={index}
        >
          <View
            style={{
              width: 10,
              height: "auto",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                width: 4,
                height: 10,
                marginTop: "auto",
                backgroundColor: "blue",
                alignSelf: "center",
              }}
            ></View>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginTop: "auto",
                backgroundColor: "blue",
                alignSelf: "center",
              }}
            ></View>
            <View
              style={{
                width: 4,
                height: 10,
                marginTop: "auto",
                backgroundColor: "blue",
                alignSelf: "center",
              }}
            ></View>
          </View>
          {per.map((x, index) => (
            <Text
              key={index}
              style={{ color: "black", fontSize: 17, fontWeight: "bold" }}
            >
              {x.name}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default PreviousAct;
