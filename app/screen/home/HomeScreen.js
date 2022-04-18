import React, { Component } from "react";
import { ScrollView, View, StatusBar } from "react-native";
import HotelComponent from "../residential_hotel/HotelComponent";
import SearchComponent from "../search/SearchComponent";
import CategoryScreen from "./CategoryScreen";
import SpotScreen from "./SpotScreen";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { navigation } = this.props;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View>
          <SearchComponent />
        </View>
        <View style={{ margin: 15 }}>
          <View>
            <CategoryScreen navigation={navigation} />
          </View>
          <View>
            <SpotScreen navigation={navigation} />
          </View>
          <View>
            <HotelComponent />
          </View>
        </View>
      </ScrollView>
    );
  };
}

export default HomeScreen;
