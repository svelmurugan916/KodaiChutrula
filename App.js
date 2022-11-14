import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationApp from "./app/component/NavigationApp";
import AnimatedMapViewScreen from "./app/screen/googleMap/AnimatedMapViewScreen";
import * as Font from "expo-font";
import GoogleMapComponent from "./app/screen/googleMap/GoogleMapComponent";
import MapViewWithDirections from "./app/screen/googleMap/MapViewWithDirections";
import { Provider } from "react-redux";
import { store } from "./app/redux/redux-store";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Light": require("./app/assets/fonts/Nunito-Light.ttf"),
    "Nunito-Bold": require("./app/assets/fonts/Nunito-Bold.ttf"),
    "Poppins-Regular": require("./app/assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Light": require("./app/assets/fonts/poppins/Poppins-Light.ttf"),
    "Poppins-Medium": require("./app/assets/fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./app/assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./app/assets/fonts/poppins/Poppins-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <NavigationApp />
        {/* <CachedImageComponent
            uri="https://www.cameraegg.org/wp-content/uploads/2015/06/canon-powershot-g3-x-sample-images-4.jpg"
            style={{ height: 150, width: 280 }}
          /> */}
        {/* <GoogleMapComponent /> */}
        {/* <AnimatedMapViewScreen /> */}
        {/* <MapViewWithDirections /> */}
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFB",
    // padding: 15,
  },
});

registerRootComponent(App);
