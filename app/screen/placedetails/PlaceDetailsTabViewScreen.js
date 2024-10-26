// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import "react-native-gesture-handler";

import * as React from "react";
import { View, Dimensions, useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import PlaceOverViewScreen from "./PlaceOverViewScreen";
import PlaceReviewScreen from "./PlaceReviewScreen";
import PlaceAboutScreen from "./PlaceAboutScreen";
import { primaryColor } from "../../constants";
import PlaceImageGalleryScreen from "./PlaceImageGalleryScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

class PlaceDetailsTabViewScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  TabStack = () => {
    const { navigation, placeDetails } = this.props;
    const { width } = useWindowDimensions();
    console.log("PlaceDetailsTabViewScreen props - ", this.props);
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          activeTintColor: "#FFFFFF",
          inactiveTintColor: "#F8F8F8",
          tabBarScrollEnabled: false,
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: "#AAAAAA",
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: "Poppins-Medium",
            textTransform: "none",
          },
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarIndicatorStyle: {
            borderBottomWidth: 0,
            backgroundColor: "#fff",
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
            tabBarLabel: "Overview",
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
            tabBarLabel: "Reviews",
          }}
        />
        <Tab.Screen
          name="PhotosPage"
          component={PlaceImageGalleryScreen}
          options={{
            tabBarLabel: "Photos",
          }}
        />
      </Tab.Navigator>
    );
  };

  render = () => {
    console.log("window height: ", Dimensions.get("window").height);
    return (
      <View
        style={{
          height: Dimensions.get("window").height - 70,
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
