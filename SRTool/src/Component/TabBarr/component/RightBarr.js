import React, { useContext, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const RightBarr = () => {
  const { popUp, setPopup, userData } = useContext(AuthContext);

  useEffect(() => {}, [userData]);

  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {userData ? (
        <>
          <View
            style={{
              width: "auto",
              height: "auto",
              marginLeft: "auto",
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "900",
                color: "#fff",
                textAlign: "center",
                fontSize: 15,
              }}
            >
              {userData.name}
            </Text>
          </View>
          <Pressable
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#fff",
              backgroundColor: "#fff",
              userSelect: "none",
            }}
            onPress={() => setPopup("profile")}
          >
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 7.5,
                position: "absolute",
                bottom: -5,
                right: -5,
                backgroundColor:
                  userData.status === "Production"
                    ? "green"
                    : userData.status === "Break"
                    ? "#ff8503"
                    : userData.status === "Huddle"
                    ? "#feb204"
                    : userData.status === "Meeting"
                    ? "red"
                    : userData.status === "wellBeing"
                    ? "#ffd22b"
                    : userData.status === "offline"
                    ? "gray"
                    : "silver",
              }}
            ></View>
          </Pressable>
        </>
      ) : null}
    </View>
  );
};

export default RightBarr;
