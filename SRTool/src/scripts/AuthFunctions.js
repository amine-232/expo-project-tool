import React from "react";
import { firebase, app, auth, db } from "../firebase/fireBase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import axios from "axios";
import { format } from "date-fns";

axios.defaults.baseURL = "http://localhost:9001";

const AddActivity = async (activity, activityName, userId) => {
  const day = format(new Date(), "dd:MM:yy");
  const time = format(new Date(), "HH:mm:ss");

  try {
    const usercollectionRer = collection(
      db,
      "users",
      userId,
      "Activities",
      day,
      activityName
    );
    const activityDocRef = doc(usercollectionRer, time);

    const data = {
      on: day,
      at: time,
      activity: activity,
    };

    await setDoc(activityDocRef, data);
  } catch (err) {
    console.log("error", err);
  }
};

const getDocsFunction = async (userId, setUsersDocs) => {
  try {
    const { data } = await axios.post("/get/users", {
      userId,
    });

    if (data) {
      const usersDocs = data.data;
      setUsersDocs(usersDocs);
    }
  } catch (err) {
    console.log(err);
  }
};

const getReportDocs = async (userId, setReportDocs) => {
  try {
    const { data } = await axios.post("/get/reported/quee", {
      userId,
    });

    if (data) {
      const reportDocs = data.data;
      setReportDocs(reportDocs);
    }
  } catch (err) {
    console.log(err);
  }
};

const FunctionLogin = async (email, password, setIsLoading) => {
  setIsLoading(true);
  try {
    auth.signInWithEmailAndPassword(email, password);
    setIsLoading(false);
  } catch (e) {
    console.log("error", e);
    setIsLoading(false);
  }
};

const LogOutFunction = async () => {
  await auth.signOut();
};

const RegisterFunction = async (email, password, setIsLoading) => {
  setIsLoading(true);
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (credential) => {
        const userId = credential.user.uid;
        const userEmail = credential.user.email;
        console.log("userId:", userId);
        if (userId && userEmail) {
          await saveUserData(userId, userEmail, setIsLoading);
        }
      });
  } catch (e) {
    setIsLoading(false);

    console.log("error", e);
  }
};

const saveUserData = async (userId, userEmail, setIsLoading) => {
  const userCollection = collection(db, "users");

  try {
    const userDocRef = doc(userCollection, userId);
    const userdata = {
      userId: userId,
      email: userEmail,
    };

    await setDoc(userDocRef, userdata);
    setIsLoading(false);

    console.log("data was saved");
  } catch (e) {
    console.log(e);
  }
};

export {
  FunctionLogin,
  LogOutFunction,
  RegisterFunction,
  getDocsFunction,
  AddActivity,
  getReportDocs,
};
