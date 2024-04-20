import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import RightBarr from "./component/RightBarr";
import LeftBarr from "./component/LeftBarr";
import CostumeInput from "../CostumeInput";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const TabBarr = () => {
  const { setPopup, setSearchRst, userId, usersDocs, setUsersDocs } =
    useContext(AuthContext);
  const [isSerach, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue) {
      const result = usersDocs.filter(
        (user) =>
          user.lastName === searchValue ||
          user.name === searchValue ||
          user.userId === searchValue ||
          user.email === searchValue
      );

      setSearchRst(result);
      setPopup("search");
    } else if (searchValue === false) {
      setSearchRst([]);
      setPopup(false);
      setIsSearch(false);
      setSearchValue("");
    }
  });

  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        paddingVertical: 5,
        flexDirection: "row",
        backgroundColor: "#00008B",
        paddingHorizontal: 10,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "20%",
          height: "auto",
          flexDirection: "row",
        }}
      >
        <LeftBarr
          isSerach={isSerach}
          setIsSearch={setIsSearch}
          userId={userId}
          setUsersDocs={setUsersDocs}
        />
      </View>

      <View
        style={{
          width: "50%",
          height: "auto",
        }}
      >
        {isSerach ? (
          <CostumeInput
            isSearch={true}
            inptColor={"black"}
            txtColor={"#fff"}
            pltxColor={"silver"}
            iconColor={"#fff"}
            radius={10}
            placeholder={"Search"}
            fontS={16}
            setValue={(txt) => setSearchValue(txt)}
            onBlur={() => {
              if (searchValue == "") {
                setSearchValue(false);
              }
            }}
          />
        ) : (
          <Text
            style={{
              fontSize: 25,
              fontWeight: "900",
              color: "#fff",
              textAlign: "center",
            }}
          >
            SRTool
          </Text>
        )}
      </View>
      <View
        style={{
          width: "20%",
          height: "auto",
          flexDirection: "row",
        }}
      >
        <RightBarr />
      </View>
    </View>
  );
};

export default TabBarr;
