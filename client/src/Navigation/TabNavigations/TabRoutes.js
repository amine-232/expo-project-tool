import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeTab from "../../TabScreens/HomeTab";
import ProfileTab from "../../TabScreens/Profile";
import FriendsTab from "../../TabScreens/Friends";
import WatchTab from "../../TabScreens/Watch";

const Tab = createMaterialTopTabNavigator();
const TabRoutes = () => {
  const TabsData = [
    {
      name: "homeTab",
      component: HomeTab,
    },
    {
      name: "watchTab",
      component: WatchTab,
    },
    {
      name: "friendsTab",
      component: FriendsTab,
    },
    {
      name: "profileTab",
      component: ProfileTab,
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="homeTab"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          width: 0,
          height: 0,
        },
      }}
    >
      {TabsData.map((tb, index) => (
        <Tab.Screen name={tb.name} component={tb.component} key={index} />
      ))}
    </Tab.Navigator>
  );
};

export default TabRoutes;
