// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import "react-native-gesture-handler";

import * as React from "react";
import { View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import PlaceOverViewScreen from "./PlaceOverViewScreen";
import PlaceReviewScreen from "./PlaceReviewScreen";
import PlaceAboutScreen from "./PlaceAboutScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

class PlaceDetailsTabViewScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  TabStack = () => {
    const { navigation, placeDetails } = this.props;
    console.log("PlaceDetailsTabViewScreen props - ", this.props);
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          activeTintColor: "#FFFFFF",
          inactiveTintColor: "#F8F8F8",
          tabBarScrollEnabled: true,
          style: {
            backgroundColor: "#633689",
          },
          labelStyle: {
            textAlign: "center",
          },
          indicatorStyle: {
            borderBottomColor: "#87B56A",
            borderBottomWidth: 2,
          },
        }}
      >
        <Tab.Screen
          name="FirstPage"
          children={() => (
            <PlaceOverViewScreen
              navigation={navigation}
              placeDetails={placeDetails}
            />
          )}
          options={{
            tabBarLabel: "OVERVIEW",
            title: "Overview",
            //   tabBarIcon: ({ color, size }) => (
            //     <MaterialCommunityIcons name="home" color={color} size={size} />
            //   ),
          }}
        />
        <Tab.Screen
          name="ReviewPage"
          component={PlaceReviewScreen}
          options={{
            tabBarLabel: "REVIEWS",
          }}
        />
        <Tab.Screen
          name="PhotosPage"
          component={PlaceReviewScreen}
          options={{
            tabBarLabel: "PHOTOS",
          }}
        />
        <Tab.Screen
          name="AboutPage"
          component={PlaceAboutScreen}
          options={{
            tabBarLabel: "About",
          }}
        />
      </Tab.Navigator>
    );
  };

  render = () => {
    return (
      <View
        style={{
          height: Dimensions.get("window").height,
          flex: 2,
          backgroundColor: "#fff",
        }}
      >
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen
              name="TabStack"
              component={this.TabStack}
              options={{
                title: "Tab Stack",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  };
}

export default PlaceDetailsTabViewScreen;
