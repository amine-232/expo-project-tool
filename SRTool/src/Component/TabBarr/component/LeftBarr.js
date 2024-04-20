import React from "react";
import { View, Text } from "react-native";
import CostumeIconBtn from "../../CostumeIconBtn";
import SearchIcon from "../../../../assets/search.png";
import { getDocsFunction } from "../../../scripts/AuthFunctions";

const LeftBarr = ({ isSerach, setIsSearch, userId, setUsersDocs }) => {
  return (
    <View style={{ width: "100%", height: "auto", flexDirection: "row" }}>
      {isSerach ? null : (
        <>
          <Text
            style={{
              fontWeight: "900",
              color: "#fff",
              textAlign: "center",
              fontSize: 15,
            }}
          >
            left
          </Text>
          <View style={{ marginLeft: 10 }}>
            <CostumeIconBtn
              icon={SearchIcon}
              iconSize={25}
              iconColor={"#fff"}
              onPress={() => {
                getDocsFunction(userId, setUsersDocs);
                setIsSearch(true);
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default LeftBarr;
