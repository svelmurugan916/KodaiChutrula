import React, { useRef, useState, useEffect } from "react";
import { View, ActivityIndicator, Animated } from "react-native";
import { BANNER_H, primaryColor } from "../../constants";
import TopNavigation from "./TopNavigation";
import BannerTitleForAnimationHeader from "./BannerTitleForAnimationHeader";
import ImageGalleryInAnimationHeader from "./ImageGalleryInAnimationHeader";
import { storeOrGetFileCache } from "../../utils/CacheFile";

const AnimationHeaderScreen = (props) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const [fileCachedImagePath, setFileCachedImagePath] = useState(undefined);
  const {
    children,
    bannerImageUrl,
    headerTitle,
    navigation,
    showLike,
    showImageGallery,
    bannerTitle,
  } = props;
  const [showBannerTitle, setBannerTitle] = useState(bannerTitle !== undefined);

  useEffect(() => {
    cacheImageFile(bannerImageUrl);
  });

  const cacheImageFile = async (uri) => {
    storeOrGetFileCache(uri, (imageUri) => {
      setFileCachedImagePath(imageUri);
    });
  };

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
        showLike={showLike}
        showBannerTitle={showBannerTitle}
      />
      <Animated.ScrollView
        nestedScrollEnabled={true}
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
          {fileCachedImagePath !== undefined ? (
            <Animated.Image
              style={styles.banner(scrollA)}
              source={{ uri: fileCachedImagePath }}
            />
          ) : (
            <View style={[styles.activityIndicatoryView]}>
              <ActivityIndicator color={primaryColor} size={"large"} />
            </View>
          )}
          {showImageGallery && <ImageGalleryInAnimationHeader />}
          {showBannerTitle && (
            <BannerTitleForAnimationHeader bannerTitle={bannerTitle} />
          )}
        </View>
        <View
          style={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            marginTop: -20,
            backgroundColor: "white",
          }}
        >
          {children}
        </View>
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

  activityIndicatoryView: {
    justifyContent: "center",
    borderColor: "#d7d7d7",
    borderWidth: 0.7,
    borderStyle: "solid",
    height: BANNER_H,
    width: "100%",
  },

  banner: (scrollA) => ({
    height: BANNER_H,
    width: "100%",
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
          outputRange: [1, 1, 1, 1],
        }),
      },
    ],
  }),
};

export default AnimationHeaderScreen;
