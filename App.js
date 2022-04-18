import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationApp from "./app/component/NavigationApp";
import AnimatedMapViewScreen from "./app/screen/googleMap/AnimatedMapViewScreen";

import GoogleMapComponent from "./app/screen/googleMap/GoogleMapComponent";
import MapViewWithDirections from "./app/screen/googleMap/MapViewWithDirections";
import { Provider } from "react-redux";
import { store } from "./app/redux/redux-store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <NavigationApp />
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
    backgroundColor: "#F7F7F7",
    // padding: 15,
  },
});
