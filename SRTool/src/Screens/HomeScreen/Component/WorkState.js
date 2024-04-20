import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import ProfileBtn from "./ProfileBtn";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { firebase, app, auth, db } from "../../../firebase/fireBase";
import { updateDoc, doc, collection, setDoc, count } from "firebase/firestore";
import { format } from "date-fns";

const WorkState = () => {
  const { userId, dataLoded, setDataLoded, setPopup, userData, countDate } =
    useContext(AuthContext);

  const [previousState, setPreviousSatate] = useState();
  const [tes, setTes] = useState(false);

  useEffect(() => {}, [previousState, userData]);

  const calculateBreakUsage = (hours, minutes, seconds, allowance) => {
    // Convert allowance to a number (assuming it's passed as a string)
    const Allowance = parseInt(allowance.giventime);

    // Parse hours, minutes, and seconds as numbers
    const parsedHours = hours;
    const parsedMinutes = minutes;
    const parsedSeconds = seconds;

    // Check if parsed values are valid numbers
    if (!isNaN(parsedHours) && !isNaN(parsedMinutes) && !isNaN(parsedSeconds)) {
      // Calculate total time in minutes
      const totalMinutes =
        parsedHours * 60 + parsedMinutes + parsedSeconds / 60;

      // Calculate exceeded time
      const exceededTime = totalMinutes - Allowance;

      if (exceededTime > 0) {
        // Convert exceeded time to hours, minutes, and seconds
        const exceededHours = Math.floor(exceededTime / 60);
        const exceededMinutes = Math.floor(exceededTime % 60);
        const exceededSeconds = Math.floor(
          (exceededTime - exceededHours * 60 - exceededMinutes) * 60
        );

        return {
          giventime: allowance.giventime,
          leftHours: 0,
          leftMinutes: 0,
          leftSeconds: 0,
          exceededHours,
          exceededMinutes,
          exceededSeconds,
        };
      } else {
        // Calculate remaining time
        const remainingTime = Allowance - totalMinutes;

        // Convert remaining time to hours, minutes, and seconds
        const leftHours = Math.floor(remainingTime / 60);
        const leftMinutes = Math.floor(remainingTime % 60);
        const leftSeconds = Math.floor(
          (remainingTime - leftHours * 60 - leftMinutes) * 60
        );

        return {
          giventime: allowance.giventime,
          exceededHours: 0,
          exceededMinutes: 0,
          exceededSeconds: 0,
          leftHours,
          leftMinutes,
          leftSeconds,
        };
      }
    } else {
      // Return invalid values if input is not valid numbers
      return {
        giventime: allowance.giventime,
        leftHours: "Invalid",
        leftMinutes: "Invalid",
        leftSeconds: "Invalid",
        exceededHours: 0,
        exceededMinutes: 0,
        exceededSeconds: 0,
      };
    }
  };

  const udateAllowance = async (
    leftHours,
    leftMinutes,
    leftSeconds,
    exceededHours,
    exceededMinutes,
    exceededSeconds,
    datetime,
    giventime
  ) => {
    try {
      const activityCollectionRef = collection(
        db,
        "users",
        userId,
        "productivity"
      );

      const state = userData.status;

      const activityDoc = doc(activityCollectionRef, datetime);

      const addData = {
        giventime: giventime,
        leftHours: leftHours,
        leftMinutes: leftMinutes,
        leftSeconds: leftSeconds,
        exceededHours: exceededHours,
        exceededMinutes: exceededMinutes,
        exceededSeconds: exceededSeconds,
      };

      console.log("allowance", addData);

      if (state === "Break") {
        const addthis = { Break: addData };
        await updateDoc(activityDoc, addthis);
      }
      if (state === "Huddle") {
        const addthis = { Huddle: addData };

        await updateDoc(activityDoc, addthis);
      }
      if (state === "Meeting") {
        const addthis = { Meeting: addData };
        await updateDoc(activityDoc, addthis);
      }
      if (state === "Production") {
        const addthis = { Production: addData };
        await updateDoc(activityDoc, addthis);
      }
      if (state === "offline") {
        const addthis = { offline: addData };
        await updateDoc(activityDoc, addthis);
      }
      if (state === "wellBeing") {
        const addthis = { wellBeing: addData };
        await updateDoc(activityDoc, addthis);
      }
      if (state === "nonSrtProduction") {
        const addthis = { nonSrtProduction: addData };
        await updateDoc(activityDoc, addthis);
      }
      console.log("userData leftHours, leftMinutes, leftSeconds");

      setDataLoded(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  const statusFunction = async (state, datetime, time, userId, starttime) => {
    try {
      const userCollection = collection(db, "users");

      const userDoc = doc(userCollection, userId);

      await updateDoc(userDoc, {
        status: state,
        stratTime: time,
        statusDate: datetime,
        stime: starttime,
      });

      setDataLoded(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  const onPresshandele = async (state) => {
    try {
      const datetime = format(new Date(), "dd:MM:yyyy");
      const starttime = new Date();
      const time = format(starttime, "HH:mm:ss");

      // Reference to the current state productivity document
      const userProductivity = collection(
        db,
        "users",
        userId,
        "productivity",
        datetime,
        state
      );

      const prodoc = doc(userProductivity, time);

      // Data to set for the current state productivity document
      const data = {
        start: time,
        state: state,
        end: "",
        totalTime: "",
      };

      // Set the current state productivity document
      await setDoc(prodoc, data);

      statusFunction(state, time, datetime, userId, starttime);

      userData;
      // If there's a previous state, update its end time and calculate total time
      if (userData) {
        const endTime = new Date();

        // status: state,
        // stratTime: time,
        // statusDate: datetime,
        // stime: starttime,

        const strtime = userData.stime;
        // Calculate time difference
        const timeDiffMilliseconds = endTime - strtime.toMillis();
        const timeDiffSeconds = Math.floor(timeDiffMilliseconds / 1000);
        const hours = Math.floor(timeDiffSeconds / 3600);
        const minutes = Math.floor((timeDiffSeconds % 3600) / 60);
        const seconds = timeDiffSeconds % 60;

        // const { leftHours, leftMinutes, leftSeconds } = subtractTime(
        //   hours,
        //   minutes,
        //   seconds
        // );

        const allowance = countDate[userData.status];

        console.log("allowance", `${allowance.giventime}`);
        const {
          leftHours,
          leftMinutes,
          leftSeconds,
          exceededHours,
          exceededMinutes,
          exceededSeconds,
          giventime,
        } = calculateBreakUsage(hours, minutes, seconds, allowance);

        console.log("userData leftHours, leftMinutes, leftSeconds");

        await udateAllowance(
          leftHours,
          leftMinutes,
          leftSeconds,
          exceededHours,
          exceededMinutes,
          exceededSeconds,
          datetime,
          giventime
        );

        const previousSt = userData.status;
        const previousId = userData.stratTime;
        const statusId = userData.statusDate;

        const userProduct = collection(
          db,
          "users",
          userId,
          "productivity",
          previousId,
          previousSt
        );

        const prod = doc(userProduct, statusId);
        const newEnd = format(endTime, "HH:mm:ss");
        // Update the previous state productivity document with the end time and total time
        const cotumeTotalT = `${hours > 0 ? `${hours}: Hour and :` : ""} ${
          minutes > 0 ? `${minutes}:Minutes and :` : ""
        } ${seconds} seconds`;
        await updateDoc(prod, {
          end: newEnd,
          totalTime: cotumeTotalT,
        });
        setDataLoded(true);
      }

      setDataLoded(true);
      // Set the current state as the previous state for the next iteration
      setPreviousSatate({ state: state, id: time, starttime: starttime });

      setPopup(false);
    } catch (error) {
      setPopup(false);
      console.log("Error:", error);
    }
  };

  const AgentState = [
    {
      name: "Production",
      onPress: () => onPresshandele("Production"),
      wrokState: "green",
    },
    {
      name: "Break",
      onPress: () => onPresshandele("Break"),
      wrokState: "#ff8503",
    },
    {
      name: "Huddle",
      onPress: () => onPresshandele("Huddle"),
      wrokState: "#feb204",
    },
    {
      name: "Meeting",
      onPress: () => onPresshandele("Meeting"),
      wrokState: "red",
    },
    {
      name: "well-being",
      onPress: () => onPresshandele("wellBeing"),
      wrokState: "#ffd22b",
    },
    {
      name: "offline",
      onPress: () => onPresshandele("offline"),
      wrokState: "gray",
    },
    {
      name: "non-SrtProduction",
      onPress: () => onPresshandele("nonSrtProduction"),
      wrokState: "#7CFC00",
    },
  ];
  return (
    <View style={{ width: "100%", height: "auto", flexDirection: "column" }}>
      {AgentState.map((state, index) => (
        <ProfileBtn
          key={index}
          title={state.name}
          wrokState={state.wrokState}
          isAgent={true}
          onPress={state.onPress}
          txtSize={16}
        />
      ))}
    </View>
  );
};

export default WorkState;
