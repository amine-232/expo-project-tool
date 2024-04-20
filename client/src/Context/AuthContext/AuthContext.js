import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { firebase } from "../../firebase/fireBase";

const auth = firebase.auth();

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [userId, setUserId] = useState(null);

  const onAuthStateChange = (user) => {
    setUser(user);
    setUserId(user.uid);
  };

  console.log("userId:", userId);
  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(onAuthStateChange);
    return subscribe;
  });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
