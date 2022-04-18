import React from "react";
import { Animated, Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HEADER_HEIGHT = 350;

const AnimatedHeader = ({ animatedValue }) => {
  const insets = useSafeAreaInsets();

  const animatedHeaderBackground = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: ["grey", "white"],
    extrapolate: "clamp",
  });

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top],
    extrapolate: "clamp",
  });

  return (
    <View>
      <Animated.Image
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: headerHeight,
          backgroundColor: animatedHeaderBackground,
          borderRadius: 10,
          width: "96%",
          marginLeft: "2%",
        }}
        source={require("../../assets/boating.jpg")}
      />
    </View>
  );
};

export default AnimatedHeader;
