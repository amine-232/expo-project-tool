import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useHover } from "react-native-web-hooks";

const ProfileBtn = ({
  onPress,
  title,
  iconSize,
  icon,
  isAgent,
  wrokState,
  radius,
  brdColor,
  tltColor,
  txtSize,
  btradius,
}) => {
  const ref = React.useRef(null);
  const isHovered = useHover(ref);

  return (
    <Pressable
      ref={ref}
      style={{
        width: "100%",
        height: "auto",
        userSelect: "none",
        backgroundColor: isHovered ? "black" : "#fff",
        userSelect: "none",
        borderRadius: radius ? radius : "none",
        borderColor: brdColor ? brdColor : "",
        borderWidth: brdColor ? 1 : 0,
        borderBottomRightRadius: btradius ? btradius : 0,
        borderBottomLeftRadius: btradius ? btradius : 0,
      }}
      onPress={() => onPress()}
    >
      <View
        style={{
          width: icon | isAgent ? "80%" : "100%",
          height: "auto",
          flexDirection: "row",
          padding: 5,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            width: isAgent | icon ? "80%" : "100%",
            height: "auto",
          }}
        >
          <Text
            style={{
              textAlign: icon | isAgent ? "" : "center",
              fontSize: txtSize ? txtSize : 17,
              fontWeight: "bold",
              color: isHovered ? "#fff" : tltColor ? tltColor : "black",
            }}
          >
            {title}
          </Text>
        </View>
        {icon | isAgent ? (
          <View
            style={{
              width: "20%",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon ? (
              <Image
                source={icon}
                style={{ width: iconSize, height: iconSize }}
                resizeMode={"contain"}
                tintColor={isHovered ? "#fff" : "black"}
              />
            ) : null}
            {isAgent ? (
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 7.5,
                  backgroundColor: wrokState,
                }}
              ></View>
            ) : null}
          </View>
        ) : null}
      </View>
    </Pressable>
  );
};

export default ProfileBtn;
