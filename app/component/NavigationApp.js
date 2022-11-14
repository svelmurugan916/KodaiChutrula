import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ShowPageDetailsScreen from "../screen/placedetails/ShowPageDetailsScreen";
import HomeScreen from "../screen/home/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SpotsForCategory from "../screen/categoryScreen/SpotsForCategory";
import AnimatedMapViewScreen from "../screen/googleMap/AnimatedMapViewScreen";
import SearchScreenComponent from "../screen/search/SearchScreenComponent";
import ShowTourPlanDetailsComponent from "../screen/trip-plan/ShowTourPlanDetailsComponent";

const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 2000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

class NavigationApp extends Component {
  render = () => {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="ShowPageDetailsScreen"
            component={ShowPageDetailsScreen}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen
            name="SpotsForCategory"
            component={SpotsForCategory}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen
            name="ShowTourPlanDetailsComponent"
            component={ShowTourPlanDetailsComponent}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen
            name="AnimatedMapViewScreen"
            component={AnimatedMapViewScreen}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
}

export default NavigationApp;
