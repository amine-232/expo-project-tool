import React from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
const Card = ({ onPress, name, profilePic }) => {
  // see in 40 minutes or 45 minutes

  // let's create a top bar navigation it, is similar to craating a navigation only we are goring to use a
  // differnet dependence but the same code structure
  return (
    <View
      style={{
        width: "auto",
        height: "auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
      }}
    >
      <Pressable
        style={{
          width: 100,
          height: 100,
          borderWidth: 2,
          marginHorizontal: 10,
          marginVertical: 10,
          borderColor: "#1F51FF",
          borderRadius: 50,
        }}
        onPress={onPress}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            source={{ uri: profilePic }}
            style={{ width: "100%", height: "100%", borderRadius: 50 }}
            resizeMode={"cover"}
          />
        </View>
      </Pressable>
      <View style={{ width: "auto", height: "auto", flexWrap: "wrap" }}>
        <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const profilePic =
  "https://firebasestorage.googleapis.com/v0/b/streaming-app-c0536.appspot.com/o/default%2Fprofile.jpg?alt=media&token=25d48144-070f-4313-9810-d6c24d4d12e6";

const StreamCard = () => {
  const Testdata = [
    {
      name: "A",
      onPress: () => console.log("A pressed"),
      profilePic: profilePic,
    },
    {
      name: "B",
      onPress: () => console.log("B pressed"),
      profilePic: profilePic,
    },
    {
      name: "C",
      onPress: () => console.log("C pressed"),
      profilePic: profilePic,
    },
    {
      name: "A",
      onPress: () => console.log("A pressed"),
      profilePic: profilePic,
    },
    {
      name: "B",
      onPress: () => console.log("B pressed"),
      profilePic: profilePic,
    },
    {
      name: "C",
      onPress: () => console.log("C pressed"),
      profilePic: profilePic,
    },
    {
      name: "A",
      onPress: () => console.log("A pressed"),
      profilePic: profilePic,
    },
    {
      name: "B",
      onPress: () => console.log("B pressed"),
      profilePic: profilePic,
    },
    {
      name: "C",
      onPress: () => console.log("C pressed"),
      profilePic: profilePic,
    },
    {
      name: "A",
      onPress: () => console.log("A pressed"),
      profilePic: profilePic,
    },
    {
      name: "B",
      onPress: () => console.log("B pressed"),
      profilePic: profilePic,
    },
    {
      name: "C",
      onPress: () => console.log("C pressed"),
      profilePic: profilePic,
    },
  ];

  return (
    <ScrollView
      style={{
        width: "96%",
        height: "auto",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        marginVertical: 20,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Testdata.map((item, index) => (
        <Card
          key={index}
          onPress={() => item.onPress()}
          name={item.name}
          profilePic={item.profilePic}
        />
      ))}
    </ScrollView>
  );
};

export default StreamCard;
