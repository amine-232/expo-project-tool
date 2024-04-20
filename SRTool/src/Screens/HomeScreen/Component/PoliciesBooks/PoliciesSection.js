import React, { useState } from "react";
import { View, Text } from "react-native";
import ProfileBtn from "../ProfileBtn";
import BookA from "../../../../../assets/book1.png";
import BookB from "../../../../../assets/book2.png";
import BookC from "../../../../../assets/book3.png";
import { useNavigation } from "@react-navigation/native";
import { policiesBooks } from "../../../../utils/Utils";

const PoliciesSection = () => {
  const [isShow, setIsShow] = useState(false);

  const naviagtion = useNavigation();

  return (
    <View
      style={{
        width: "90%",
        height: "auto",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "silver",
        borderRadius: 10,
        marginLeft: 20,
      }}
    >
      <ProfileBtn
        title={"Policies Books"}
        icon={BookA}
        iconSize={25}
        txtSize={15}
        brdColor={"silver"}
        radius={10}
        onPress={() => {
          if (!isShow) {
            setIsShow(true);
          } else {
            setIsShow(false);
          }
        }}
      />
      {isShow ? (
        <>
          {policiesBooks.map((plc, index) => (
            <ProfileBtn
              key={index}
              title={plc.policies}
              onPress={() =>
                naviagtion.navigate("PoliciesScreen", {
                  policyHeader: plc.policyHeader,
                  policyiline: plc.policyiline,
                })
              }
              btradius={plc.policies === "policy last" ? 10 : 0}
            />
          ))}
        </>
      ) : null}
    </View>
  );
};

export default PoliciesSection;
