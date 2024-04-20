import React from "react";
import { View, Text, ScrollView } from "react-native";

const PoliciesScreen = ({ naviagtion, route }) => {
  const { policyHeader, policyiline } = route.params;
  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
      }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          width: "90%",
          height: "auto",
          borderRadius: 10,
          padding: 5,
          borderWidth: 1,
          borderColor: "silver",
          alignSelf: "center",
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "900", textAlign: "center" }}>
          {policyHeader}
        </Text>
      </View>

      <View
        style={{
          width: "auto",
          height: "auto",
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "900" }}>{policyiline}</Text>
      </View>
    </ScrollView>
  );
};

export default PoliciesScreen;
