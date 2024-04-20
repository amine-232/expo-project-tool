import React from "react";
import { firebase } from "../firebase/fireBase";
import { collection, doc, setDoc } from "firebase/firestore";

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
// const storage = firebase.storage(app);

const FunctionLogin = async (email, password) => {
  try {
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      const userId = userCredential.user.uid;
      console.log("userId:", userId);
    });
  } catch (e) {
    console.log("error", e);
  }
};

const RegisterFunction = async (email, password, name, lastName) => {
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (credential) => {
        const userId = credential.user.uid;
        console.log("userId:", userId);
        if (userId) {
          await saveUserData(userId, email, name, lastName);
        }
      });
  } catch (e) {
    console.log("error", e);
  }
};

const saveUserData = async (userId, email, name, lastName) => {
  const userCollection = collection(db, "users");

  try {
    const userDocRef = doc(userCollection, userId);
    const userdata = {
      userId: userId,
      email: email,
      name: name,
      lastName: lastName,
    };

    await setDoc(userDocRef, userdata);
    console.log("data was saved");
  } catch (e) {
    console.log(e);
  }
};

const LogOutFunction = async () => {
  await auth.signOut();
};

export { FunctionLogin, RegisterFunction, LogOutFunction };
