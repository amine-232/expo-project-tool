import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { firebase } from "../../firebase/fireBase";
import { doc, collection, getDoc, setDoc } from "firebase/firestore";
import { format } from "date-fns";
import { getReportDocs } from "../../scripts/AuthFunctions";

const auth = firebase.auth();
const db = firebase.firestore();

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [searchRst, setSearchRst] = useState([]);
  const [userData, setUserData] = useState(null);
  const [popUp, setPopup] = useState(false);
  const [usersDocs, setUsersDocs] = useState([]);
  const [countDate, setCountDate] = useState([]);

  const [abreak, setABreak] = useState([]);
  const [huddle, setHuddle] = useState([]);
  const [meeting, setMeeting] = useState([]);
  const [production, setProduction] = useState([]);
  const [offline, setOffline] = useState([]);
  const [wellBeing, setWellBeing] = useState([]);
  const [nonSrtProduction, setNonSrtProduction] = useState([]);
  const [reportDocs, setReportDocs] = useState([]);

  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoded, setDataLoded] = useState(true);

  const onAuthStateChange = (user) => {
    setUser(user);
    setUserId(user.uid);
    if (user.uid && dataLoded === true) {
      getUserData(user.uid);
      getUserProdactivity(user.uid);
      getReportDocs(user.uid, setReportDocs);
    }
  };

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(onAuthStateChange);
    return subscribe;
  });

  console.log("reportDocs", reportDocs);

  const getUserData = async (userId) => {
    try {
      const userDocRef = doc(collection(db, "users"), userId);
      const userdDocSnap = await getDoc(userDocRef);

      if (userdDocSnap.exists()) {
        const data = userdDocSnap.data();
        setUserData(data);
      }

      setDataLoded(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getUserProdactivity = async (userId) => {
    const dateTime = format(new Date(), "dd:MM:yyyy");
    try {
      const uCollectionRef = collection(db, "users", userId, "productivity");
      const uDocRef = doc(uCollectionRef, dateTime);
      const uDocSnap = await getDoc(uDocRef);

      if (uDocSnap.exists()) {
        const uDoc = uDocSnap.data();
        const Break = uDocSnap.data().Break;
        const Huddle = uDocSnap.data().Huddle;
        const Meeting = uDocSnap.data().Meeting;
        const Production = uDocSnap.data().Production;
        const Offline = uDocSnap.data().offline;
        const WellBeing = uDocSnap.data().wellBeing;
        const NonSrtProduction = uDocSnap.data().nonSrtProduction;
        setNonSrtProduction(NonSrtProduction);
        setABreak(Break);
        setHuddle(Huddle);
        setMeeting(Meeting);
        setProduction(Production);
        setOffline(Offline);
        setWellBeing(WellBeing);
        setCountDate(uDoc);
      } else {
        const addCollectionRef = collection(
          db,
          "users",
          userId,
          "productivity"
        );
        const addDocRef = doc(addCollectionRef, dateTime);

        const data = {
          Break: {
            giventime: "30",
            leftHours: "0",
            leftMinutes: "0",
            leftSeconds: "0",
            exceededHours: "0",
            exceededMinutes: "0",
            exceededSeconds: "0",
          },
          Huddle: {
            giventime: "15",
            leftHours: "0",
            leftMinutes: "0",
            leftSeconds: "0",
            exceededHours: "0",
            exceededMinutes: "0",
            exceededSeconds: "0",
          },
          Meeting: {
            giventime: "0",
            leftHours: "0",
            leftMinutes: "0",
            leftSeconds: "0",
            exceededHours: "0",
            exceededMinutes: "0",
            exceededSeconds: "0",
          },
          Production: {
            giventime: "360",
            leftHours: "0",
            leftMinutes: "0",
            leftSeconds: "0",
            exceededHours: "0",
            exceededMinutes: "0",
            exceededSeconds: "0",
          },
          offline: {
            giventime: "0",
            leftHours: "0",
            leftMinutes: "0",
            leftSeconds: "0",
            exceededHours: "0",
            exceededMinutes: "0",
            exceededSeconds: "0",
          },
          wellBeing: {
            giventime: "30",
            leftHours: "0",
            leftMinutes: "0",
            leftSeconds: "0",
            exceededHours: "0",
            exceededMinutes: "0",
            exceededSeconds: "0",
          },
          nonSrtProduction: {
            giventime: "30",
            leftHours: "0",
            leftMinutes: "0",
            leftSeconds: "0",
            exceededHours: "0",
            exceededMinutes: "0",
            exceededSeconds: "0",
          },
        };

        await setDoc(addDocRef, data);
      }

      setDataLoded(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {}, [searchRst]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        setIsLoading,
        popUp,
        setPopup,
        searchRst,
        setSearchRst,
        userData,
        userId,
        usersDocs,
        setUsersDocs,
        dataLoded,
        setDataLoded,
        countDate,
        abreak,
        huddle,
        meeting,
        production,
        offline,
        wellBeing,
        nonSrtProduction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
