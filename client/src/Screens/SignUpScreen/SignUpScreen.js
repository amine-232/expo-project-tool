import React from "react";
import { View, Text, useWindowDimensions, Image } from "react-native";
import CostumeInput from "../../Component/CostumeInput";
import CostumeBtn from "../../Component/CostumeBtn";
import LogoIcon from "../../../assets/A-letter.png";
import { RegisterFunction } from "../../scripts/AuthFunctions";

const SignUpScreen = () => {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [erroMessage, setErroMessage] = React.useState();
  const [inputName, setInputName] = React.useState([]);
  const [nameMatch, setNameMatch] = React.useState(false);

  const { width, height } = useWindowDimensions();

  React.useEffect(() => {
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        setErroMessage("Passwod don't Match");
      }
      if (password === confirmPassword) {
        setErroMessage("");
      }
    }
  }, [confirmPassword, password, inputName, nameMatch]);

  const handleCheckinputs = async () => {
    if (email === "") {
      setErroMessage("you need a email to be able to create account", {
        name: "email",
      });
    }

    if (name === "") {
      setErroMessage("Name is required");
      setInputName({ name: "name" });
    }
    if (lastName === "") {
      setErroMessage("Last Name is required");
      setInputName({ name: "lastName" });
    }
    if (password === "") {
      setErroMessage("Password is required");
      setInputName({ name: "Password" });
    }
    if (confirmPassword === "") {
      setErroMessage("Confirm Password is required");
      setInputName({ name: "confirmPassword" });
    }
    if (name === lastName) {
      setErroMessage("Name can't be a LastName");
      setNameMatch(true);
    }
    if (
      email !== "" &&
      name !== "" &&
      lastName !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      erroMessage === ""
    ) {
      if (name !== lastName) {
        await createAccount();
      }
    }
  };

  const createAccount = async () => {
    await RegisterFunction(email, password, name, lastName);
  };

  console.log("Inputs Data:", name, lastName, email, password, confirmPassword);

  const inputs = [
    {
      name: "name",
      txtColor: "#fff",
      inptColor: nameMatch ? "red" : "black",
      placeholder: "Enter you're Name",
      pltxColor: nameMatch ? "#fff" : "silver",
      iconColor: "#fff",
      setValue: (e) => setName(e),
    },
    {
      name: "lastname",
      txtColor: "#fff",
      inptColor: nameMatch ? "red" : "black",
      placeholder: "Enter you're Last Name",
      pltxColor: nameMatch ? "#fff" : "silver",
      iconColor: "#fff",
      setValue: (e) => setLastName(e),
    },
    {
      name: "email",
      txtColor: "#fff",
      inptColor: "black",
      placeholder: "Enter you're Email",
      pltxColor: "silver",
      iconColor: "#fff",
      isEmail: true,
      setValue: (e) => setEmail(e),
    },
    {
      name: "password",
      txtColor: "#fff",
      inptColor: "black",
      placeholder: "Enter you're password",
      pltxColor: "silver",
      iconColor: "#fff",
      isPassWord: true,
      setValue: (e) => setPassword(e),
    },
    {
      name: "confirmPassword",
      txtColor: "#fff",
      inptColor: "black",
      placeholder: "Confirm you're Password",
      pltxColor: "silver",
      iconColor: "#fff",
      isPassWord: true,
      setValue: (e) => setConfirmPassword(e),
    },
  ];

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
        <>
          <View
            style={{
              width: width > 800 ? 200 : 100,
              height: width > 800 ? 200 : 100,
              borderRadius: width > 800 ? 100 : 50,
              overflow: "hidden",
              alignSelf: "center",
            }}
          >
            <Image
              source={LogoIcon}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
          {erroMessage ? (
            <View
              style={{
                width: "100%",
                height: "auto",
                marginTop: 10,
                padding: 10,
                backgroundColor: "red",
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {erroMessage}
              </Text>
            </View>
          ) : null}
          {inputs.map((input, index) => (
            <View
              style={{
                width: "100%",
                height: "auto",
                marginTop: 10,
                marginBottom:
                  input.placeholder === "Confirm you're Password" ? 10 : "none",
              }}
              key={index}
            >
              <CostumeInput
                txtColor={
                  inputName.name === input.name ? "#fff" : input.txtColor
                }
                inptColor={
                  (erroMessage === "Name can't be a LastName" &&
                    input.name === "name" &&
                    input.name === "lastName") ||
                  inputName.name === input.name
                    ? "red"
                    : input.inptColor
                }
                placeholder={input.placeholder}
                pltxColor={input.pltxColor}
                isEmail={input.isEmail}
                iconColor={input.iconColor}
                isPassWord={input.isPassWord}
                setValue={input.setValue}
              />
            </View>
          ))}

          <View
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <CostumeBtn
              title={"logIn"}
              txtColor={"black"}
              onPress={() => handleCheckinputs()}
              hoverColor={"blue"}
              bckColor={"silver"}
              txtHover={"#fff"}
            />
          </View>
        </>
      </View>
    </View>
  );
};

export default SignUpScreen;
