import React, { useContext, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import TabBarr from "../../Component/TabBarr/TabBarr";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import PupUpScreen from "./Component/PupUpScreen";
import PoliciesSection from "./Component/PoliciesBooks/PoliciesSection";
import CostumeBtn from "../../Component/CostumeBtn";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase/fireBase";
import { collection, doc, setDoc } from "firebase/firestore";
import { format } from "date-fns";
import { AddActivity } from "../../scripts/AuthFunctions";

const HomeScreen = () => {
  const {
    popUp,
    setPopup,
    userId,
    countDate,
    abreak,
    huddle,
    meeting,
    production,
    offline,
    wellBeing,
    nonSrtProduction,
  } = useContext(AuthContext);
  useEffect(() => {}, [
    popUp,
    countDate,
    abreak,
    huddle,
    meeting,
    production,
    offline,
    wellBeing,
    nonSrtProduction,
  ]);

  const navigation = useNavigation();

  // countDate.Production.leftHours |
  // countDate.Production.leftMinutes |
  // (countDate.Production.leftSeconds > 0)
  //   ? ` -${countDate.Production.leftHours}: ${countDate.Production.leftMinutes}: ${countDate.Production.leftSeconds}`
  //   : countDate.Production.exceededHours |
  //     countDate.Production.exceededMinutes |
  //     (countDate.Production.exceededSeconds > 0)
  //   ? ` -${countDate.Production.exceededHours}: ${countDate.Production.exceededMinutes}: ${countDate.Production.exceededSeconds}`
  //   : countDate.Production.giventime,

  // Production.leftHours |
  // Production.leftMinutes |
  // (Production.leftSeconds > 0)
  //   ? ` -$.Production.leftHours}: ${Production.leftMinutes}: ${Production.leftSeconds}`
  //   : Production.exceededHours |
  //     Production.exceededMinutes |
  //     (Production.exceededSeconds > 0)
  //   ? ` -${Production.exceededHours}: ${Production.exceededMinutes}: ${Production.exceededSeconds}`
  //   : Production.giventime,

  const handeleAct = async () => {
    AddActivity("enter the quee", "EnterQuee", userId);
    navigation.navigate("ActionScreen");
  };

  // abreak,
  // huddle,
  // meeting,
  // production,
  // offline,
  // wellBeing,
  const getTimeString = ({ state }) => {
    if (
      state.exceededHours === state.leftHours &&
      state.exceededMinutes === state.leftMinutes &&
      state.exceededSeconds === state.leftSeconds
    ) {
      return `${state.giventime}`;
    }
    if (state.leftHours || state.leftMinutes || state.leftSeconds > 0) {
      return `${state.leftHours}: ${state.leftMinutes}: ${state.leftSeconds}`;
    } else if (
      state.exceededHours ||
      state.exceededMinutes ||
      state.exceededSeconds > 0
    ) {
      return `- ${state.exceededHours}: ${state.exceededMinutes}: ${state.exceededSeconds}`;
    }
  };
  const stateName = [
    {
      name: "Production",
      wrokState: getTimeString({ state: production }).startsWith("-")
        ? "red"
        : "green",
      time: getTimeString({ state: production }),
    },
    {
      name: "Break",
      wrokState: getTimeString({ state: abreak }).startsWith("-")
        ? "red"
        : "#ff8503",
      time: getTimeString({ state: abreak }),
    },
    {
      name: "Huddle",
      wrokState: getTimeString({ state: huddle }).startsWith("-")
        ? "red"
        : "#feb204",
      time: getTimeString({ state: huddle }),
    },
    {
      name: "Meeting",
      wrokState: getTimeString({ state: meeting }).startsWith("-")
        ? "red"
        : "red",
      time: getTimeString({ state: meeting }),
    },
    {
      name: "Well-being",
      wrokState: getTimeString({ state: wellBeing }).startsWith("-")
        ? "red"
        : "#ffd22b",
      time: getTimeString({ state: wellBeing }),
    },
    {
      name: "Offline",
      wrokState: "gray",
      time: getTimeString({ state: offline }),
    },
    {
      name: "Non-srtProduction",
      wrokState: getTimeString({ state: nonSrtProduction }).startsWith("-")
        ? "red"
        : "#7CFC00",
      time: getTimeString({ state: nonSrtProduction }),
    },
  ];
  return (
    <>
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <TabBarr />
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              paddingVertical: 20,
              width: "20%",
              height: "100%",
            }}
          >
            <PoliciesSection />
          </View>
          <View
            style={{
              width: "20%",
              height: "auto",
              flexDirection: "column",
              padding: 10,
              borderRadius: 10,
              borderColor: "black",
              borderWidth: 1,
              marginLeft: "auto",
              marginRight: "10%",
              marginBottom: "auto",
              marginTop: "auto",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "auto",
                padding: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Welcome Agent
              </Text>
            </View>
            {stateName.map((stn, index) => (
              <View
                style={{
                  width: "100%",
                  height: "auto",
                  borderTopWidth: 1,
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                key={index}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "900",
                    color: stn.wrokState,
                  }}
                >
                  {stn.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "900",
                    color: stn.wrokState,
                  }}
                >
                  {stn.time}
                </Text>
              </View>
            ))}
            <CostumeBtn
              title={"jumpe to the quee"}
              txtSize={15}
              hoverColor={"black"}
              txtHover={"#fff"}
              onPress={() => handeleAct()}
            />
          </View>
        </View>
      </View>
      {popUp ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: popUp === "search" ? 44 : 0,
          }}
        >
          <PupUpScreen setPopup={setPopup} popUp={popUp} />
        </View>
      ) : null}
    </>
  );
};

export default HomeScreen;
