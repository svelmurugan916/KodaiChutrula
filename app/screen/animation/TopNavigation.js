import React, { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { TOPNAVI_H, BANNER_H, primaryColor } from "../../constants";
import { Fontisto } from "@expo/vector-icons";

const TopNavigation = (props) => {
  const safeArea = useSafeArea();

  const { title, scrollA, navigation, showLike, showBannerTitle } = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);
  console.log("showBannerTitle == ", showBannerTitle);
  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener((a) => {
      // This 20 is for we did -20 margin top for top border radius.
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top - 20;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });

  return (
    <>
      {/* <StatusBar
        barStyle={isTransparent ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      /> */}
      <View style={[styles.container(safeArea, isFloating, isTransparent)]}>
        <View>
          <View
            style={[styles.topNavigationViewStyle(isTransparent), { left: 20 }]}
          >
            <Fontisto
              name="angle-left"
              style={[
                styles.title(isTransparent),
                styles.topNavigationIconStyle,
                { fontSize: 14 },
              ]}
              onPress={() => navigation.goBack()}
            />
          </View>
          {showBannerTitle && !isTransparent ? (
            <Text numberOfLines={1} style={[styles.title(isTransparent)]}>
              {title}
            </Text>
          ) : (
            <Text numberOfLines={1} style={[styles.title(isTransparent)]}>
              {" "}
            </Text>
          )}

          {showLike && (
            <View
              style={[
                styles.topNavigationViewStyle(isTransparent),
                { right: 20 },
              ]}
            >
              <Fontisto
                name="heart-alt"
                style={[
                  styles.title(isTransparent),
                  styles.topNavigationIconStyle,
                  { fontSize: 16 },
                ]}
                onPress={() => navigation.goBack()}
              />
            </View>
          )}
        </View>
      </View>
    </>
  );
};

const styles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
    height: TOPNAVI_H + safeArea.top,
    justifyContent: "center",
    shadowOffset: { y: 0 },
    backgroundColor: isTransparent ? "#0001" : "#FFF",
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
  }),
  title: (isTransparent) => ({
    textAlign: "center",
    fontSize: 16,
    color: isTransparent ? "#FFF" : "#000",
    fontFamily: "Poppins-SemiBold",
  }),
  topNavigationViewStyle: (isTransparent) => ({
    position: "absolute",
    padding: 5,
    borderRadius: 50,
    marginTop: -8,
    backgroundColor: isTransparent ? "rgba(277, 277, 277, 0.5)" : "#fff",
  }),
  topNavigationIconStyle: {
    flex: 1,
    zIndex: 999,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
    color: primaryColor,
  },
};

export default TopNavigation;
