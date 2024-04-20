import React, { useEffect } from "react";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CostumeInput from "../../Component/CostumeInput";
import CostumeBtn from "../../Component/CostumeBtn";
import TextHayper from "../../Component/TextHayper";
import { FunctionLogin, RegisterFunction } from "../../scripts/AuthFunctions";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const SignInScreen = () => {
  const { isLoading, setIsLoading } = React.useContext(AuthContext);

  useEffect(() => {}, [isLoading]);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // i'll go for a break i'll see when i come back
  const navigation = useNavigation();

  const { width, height } = useWindowDimensions();

  return (
    <>
      <View
        style={{
          width: "100%",
          height: "auto",
          paddingHorizontal: 20,
          paddingVertical: 5,
          backgroundColor: "#000080",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "900", color: "#fff" }}>
          SRTool
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: width < 800 ? "100%" : "50%",
            height: "auto",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#000080",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "900", color: "#fff" }}>
              SRTool
            </Text>
          </View>

          <View style={styles.inputView}>
            <CostumeInput
              txtColor={"#fff"}
              inptColor={"black"}
              placeholder={"enter you're Email address"}
              pltxColor={"silver"}
              isEmail={true}
              iconColor={"#fff"}
              setValue={setEmail}
            />
          </View>

          <View style={styles.inputView}>
            <CostumeInput
              txtColor={"#fff"}
              inptColor={"black"}
              placeholder={"enter you're Password"}
              pltxColor={"silver"}
              isPassWord={true}
              iconColor={"#fff"}
              setValue={setPassword}
            />
          </View>
          <TextHayper
            title={"Not Yet Having an Account"}
            onPress={() => navigation.navigate("SignUp")}
          />
          <View style={styles.itemView}>
            <CostumeBtn
              title={"logIn"}
              txtColor={"black"}
              onPress={() => FunctionLogin(email, password, setIsLoading)}
              hoverColor={"blue"}
              bckColor={"silver"}
              txtHover={"#fff"}
            />
          </View>

          <View style={styles.itemView}>
            <CostumeBtn
              title={"create account admin"}
              txtColor={"black"}
              onPress={() => RegisterFunction(email, password, setIsLoading)}
              hoverColor={"blue"}
              bckColor={"silver"}
              txtHover={"#fff"}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  itemView: {
    width: "70%",
    height: "auto",
    alignSelf: "center",
    marginVertical: 10,
  },
  inputView: {
    width: "100%",
    height: "auto",
    marginVertical: 10,
  },
});
