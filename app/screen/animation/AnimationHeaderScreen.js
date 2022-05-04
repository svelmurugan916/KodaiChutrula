import React, { useRef } from "react";
import { View, ScrollView, Image, Animated } from "react-native";
import { BANNER_H } from "./constants";
import TopNavigation from "./TopNavigation";

const AnimationHeaderScreen = (props) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const { children, bannerImageUrl, headerTitle, navigation } = props;

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const enableSomeButton = () => {
    console.log("Reached.....");
  };

  return (
    <View>
      <TopNavigation
        title={headerTitle}
        scrollA={scrollA}
        navigation={navigation}
      />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        // onScroll={({ nativeEvent }) => {
        //   if (isCloseToBottom(nativeEvent)) {
        //     enableSomeButton();
        //   }
        // }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={{ uri: bannerImageUrl }}
          />
        </View>
        {children}
      </Animated.ScrollView>
    </View>
  );
};

const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: "center",
    overflow: "hidden",
  },
  banner: (scrollA) => ({
    height: BANNER_H,
    width: "200%",
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default AnimationHeaderScreen;
