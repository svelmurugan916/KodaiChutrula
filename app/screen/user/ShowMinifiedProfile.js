import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CachedImageComponent from "../card/CachedImageComponent";
import { backgroundColor } from "../../constants";

class ShowMinifiedProfile extends Component {
  render = () => {
    return (
      <View style={styles.profileViewStyle}>
        <CachedImageComponent
          uri="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"
          style={{
            width: 45,
            height: 45,
            borderRadius: 50,
            backgroundColor: { backgroundColor },
          }}
        />
        <Text style={styles.nameTextStyle}>Hi, Amigo!</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  profileViewStyle: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  nameTextStyle: {
    fontFamily: "Poppins-Regular",
    left: 15,
    textAlignVertical: "center",
    fontSize: 16,
  },
});

export default ShowMinifiedProfile;
