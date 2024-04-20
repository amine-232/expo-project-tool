import React, { useContext, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const SerachPopup = ({ popUp }) => {
  const { setPopup, searchRst, setSearchRst } = useContext(AuthContext);

  console.log("popUp.searchValue", popUp.searchValue);
  return (
    <View
      style={{
        width: "50%",
        height: "60%",
        position: "absolute",
        backgroundColor: "black",
        alignSelf: "center",
        top: 0,
        borderRadius: 10,
        flexDirection: "column",
      }}
    >
      {searchRst && searchRst.length > 0 ? (
        <>
          {searchRst.map((user, index) => (
            <View
              style={{
                width: "100%",
                height: "auto",
                flexDirection: "row",
                paddingHorizontal: 10,
                justifyContent: "space-evenly",
                marginVertical: 10,
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 10,
              }}
              key={index}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  alignSelf: "center",
                }}
              >
                <Image
                  source={{ uri: user.profilePic }}
                  style={{ width: "100%", height: "100%", borderRadius: 25 }}
                  resizeMode={"cover"}
                />
              </View>
              <View
                style={{
                  width: "80%",
                  height: "auto",
                  flexDirection: "column",
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}
                >
                  LastBame: {user.lastName}
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}
                >
                  name: {user.name}
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}
                >
                  userId: {user.userId}
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}
                >
                  email: {user.email}
                </Text>
              </View>
            </View>
          ))}
        </>
      ) : null}
    </View>
  );
};

export default SerachPopup;
