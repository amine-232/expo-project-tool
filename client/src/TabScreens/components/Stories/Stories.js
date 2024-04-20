import React from "react";
import { ScrollView } from "react-native";
import StoryCard from "./StoryCard";

const Stories = () => {
  const profilePic =
    "https://firebasestorage.googleapis.com/v0/b/streaming-app-c0536.appspot.com/o/default%2Fprofile.jpg?alt=media&token=25d48144-070f-4313-9810-d6c24d4d12e6";

  // let create a map data for muilt Stories

  // let say a stories is  userName, userId or Account id and profile picture and a stories thumbnails and store link

  // i'll show how to extract thumbnails from the videos and save it and to be shown as front pic of the content

  // ad the momnet snice we are designing the and styling the component where going to use made data to see how the component is looking

  const StoriesData = [
    {
      userName: "userName A",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      userName: "userName B",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
    },
    {
      userName: "userName C",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340",
    },
    {
      userName: "userName D",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://img.ibxk.com.br/2017/07/13/13160112901226.jpg?ims=328x",
    },
    {
      userName: "userName A",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      userName: "userName B",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
    },
    {
      userName: "userName C",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340",
    },
    {
      userName: "userName D",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://img.ibxk.com.br/2017/07/13/13160112901226.jpg?ims=328x",
    },
    {
      userName: "userName A",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      userName: "userName B",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=",
    },
    {
      userName: "userName C",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340",
    },
    {
      userName: "userName D",
      userId: "djlakdlakldk32432342ml23k4l23l42",
      profilePic: profilePic,
      thumbnail:
        "https://img.ibxk.com.br/2017/07/13/13160112901226.jpg?ims=328x",
    },
  ];
  return (
    <ScrollView
      style={{
        width: "90%",
        height: "auto",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 20,
        marginVertical: 20,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {StoriesData.map((str, index) => (
        <StoryCard key={index} story={str} />
      ))}
    </ScrollView>
  );
};

export default Stories;
