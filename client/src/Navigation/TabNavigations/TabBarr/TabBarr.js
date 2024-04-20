import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import HomeIcon from "../../../../assets/homeIcon.png";
import ProfileIcon from "../../../../assets/userIcon.png";
import FriendsIcon from "../../../../assets/friendsIcon.png";
import WatchIcon from "../../../../assets/watchIcon.png";
import TabBtn from "./TabBtn";
const TabBarr = () => {
  const [tabName, setTabName] = useState("homeTab");
  const navigation = useNavigation();

  useEffect(() => {}, [tabName]);

  const TabData = [
    {
      name: "homeTab",
      icon: HomeIcon,
      onPress: () => {
        navigation.navigate("homeTab");
        setTabName("homeTab");
      },
    },
    {
      name: "watchTab",
      icon: WatchIcon,
      onPress: () => {
        navigation.navigate("watchTab");
        setTabName("watchTab");
      },
    },
    {
      name: "friendsTab",
      icon: FriendsIcon,
      onPress: () => {
        navigation.navigate("friendsTab");
        setTabName("friendsTab");
      },
    },
    {
      name: "profileTab",
      icon: ProfileIcon,
      onPress: () => {
        navigation.navigate("profileTab");
        setTabName("profileTab");
      },
    },
  ];
  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        paddingVertical: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View style={{ width: "20%", height: "auto" }}>
        <Text style={{ color: "#fff" }}>here</Text>
      </View>
      <View style={{ width: "50%", height: "auto", flexDirection: "row" }}>
        {TabData.map((x, index) => (
          <View style={{ width: "25%", height: "auto" }} key={index}>
            <TabBtn
              icon={x.icon}
              onPress={x.onPress}
              iconSize={20}
              iconColor={tabName === x.name ? "#1F51FF" : "#fff"}
            />
          </View>
        ))}
      </View>
      <View style={{ width: "20%", height: "auto" }}>
        <Text style={{ color: "#fff" }}>here</Text>
      </View>
    </View>
  );
};

export default TabBarr;
