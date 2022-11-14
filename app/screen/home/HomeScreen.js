import React, { Component } from "react";
import { ScrollView, View, StatusBar, StyleSheet } from "react-native";
import HotelComponent from "../residential_hotel/HotelComponent";
import SearchScreenComponent from "../search/SearchScreenComponent";
import TripPlanInitComponent from "../trip-plan/TripPlanInitComponent";
import ShowMinifiedProfile from "../user/ShowMinifiedProfile";
import CategoryScreen from "./CategoryScreen";
import SpotScreen from "./SpotScreen";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchFocused: false,
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  setSearchFocused = (isSearchFocused) => {
    this._isMounted && this.setState({ isSearchFocused });
  };

  render = () => {
    const { navigation } = this.props;
    const { isSearchFocused } = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View
          style={[
            isSearchFocused ? styles.hideElement : styles.dummyStyle,
            styles.profileStyle,
          ]}
        >
          <ShowMinifiedProfile />
        </View>
        <View>
          <SearchScreenComponent
            setSearchFocused={this.setSearchFocused}
            navigation={navigation}
          />
        </View>
        <View
          style={[
            isSearchFocused ? styles.hideElement : styles.dummyStyle,
            { margin: 15, marginTop: 0 },
          ]}
        >
          <View>
            <CategoryScreen navigation={navigation} />
          </View>
          <View>
            <TripPlanInitComponent navigation={navigation} />
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

const styles = StyleSheet.create({
  hideElement: {
    display: "none",
  },
  dummyStyle: {},
  profileStyle: {
    width: "90%",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
    alignSelf: "center",
  },
});

export default HomeScreen;
