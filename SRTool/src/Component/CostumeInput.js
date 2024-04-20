import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import AtEmail from "../../assets/at.png";
import BoldPasswordIcon from "../../assets/lock.png";
import OutlinedPasswordIcon from "../../assets/lock-outlined.png";
import SearchIcon from "../../assets/search.png";

const CostumeInput = ({
  setValue,
  txtColor,
  isPassWord,
  isEmail,
  pltxColor,
  placeholder,
  inptColor,
  iconColor,
  isSearch,
  radius,
  onBlur,
  onFocus,
  fontS,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const pwdiconChange = showPassword ? BoldPasswordIcon : OutlinedPasswordIcon;

  const ChangePwd = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: inptColor ? inptColor : "",
          borderWidth: 1,
          borderColor: "silver",
          borderRadius: radius,
        },
      ]}
    >
      <View
        style={{
          width: isEmail | isPassWord | isSearch ? "88%" : "100%",
        }}
      >
        <TextInput
          onChangeText={setValue}
          secureTextEntry={isPassWord ? showPassword : false}
          placeholder={placeholder}
          placeholderTextColor={pltxColor}
          onBlur={onBlur}
          onFocus={onFocus}
          style={{
            color: txtColor ? txtColor : "#fff",
            outlineStyle: "none",
            fontSize: fontS ? fontS : 17,
            fontWeight: "bold",
            paddingHorizontal: 5,
          }}
        />
      </View>
      {isEmail | isPassWord | isSearch ? (
        <Pressable
          style={{
            width: "12%",
            height: "auto",
            cursor: isEmail ? "default" : "pointer",
            userSelect: "none",
          }}
          onPress={() => {
            if (isPassWord) {
              ChangePwd();
            }
          }}
        >
          <View
            style={{
              width: "auto",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={
                isSearch
                  ? SearchIcon
                  : isEmail
                  ? AtEmail
                  : isPassWord
                  ? pwdiconChange
                  : ""
              }
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
              tintColor={iconColor}
            />
          </View>
        </Pressable>
      ) : null}
    </View>
  );
};

export default CostumeInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
