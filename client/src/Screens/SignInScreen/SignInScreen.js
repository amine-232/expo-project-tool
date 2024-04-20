import React from "react";
import { View, Text, useWindowDimensions, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CostumeInput from "../../Component/CostumeInput";
import CostumeBtn from "../../Component/CostumeBtn";
import TextHayper from "../../Component/TextHayper";
import { FunctionLogin } from "../../scripts/AuthFunctions";

const SignInScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // i'll go for a break i'll see when i come back
  const navigation = useNavigation();

  const { width, height } = useWindowDimensions();

  return (
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
        <View>
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

        <View>
          <CostumeInput
            txtColor={"#fff"}
            inptColor={"black"}
            placeholder={"enter you're Email address"}
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
        <View>
          <CostumeBtn
            title={"logIn"}
            txtColor={"black"}
            onPress={() => FunctionLogin(email, password)}
            hoverColor={"blue"}
            bckColor={"silver"}
            txtHover={"#fff"}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
