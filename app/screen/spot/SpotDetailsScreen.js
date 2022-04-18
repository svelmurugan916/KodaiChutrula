import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import SpotImageCardComponent from "./SpotImageCardComponent";
import { getResponse } from "../../component/RequestService";
const { width } = Dimensions.get("window");

class SpotDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotPlaces: [],
    };
  }

  fetchPlacesForSpot = () => {
    const { spotDetails } = this.props;
    const { id } = spotDetails;
    getResponse(
      "get",
      (response) => {
        if (response !== undefined) {
          const { data } = response;
          this.setState({
            spotPlaces: data,
          });
        }
      },
      `spot/getAllPlacesForSpots/${id}`
    );
  };

  componentDidMount = () => {
    this._isMounted = true;
    this.setCategoryData();
    setTimeout(() => {
      this.scrollView.scrollTo({ x: -30 });
    }, 1); // scroll view position fix
  };

  setCategoryData = () => {
    const spotPlaces = [
      {
        key: "category_2",
        name: "Kodaikanal Lake",
        imageUrl:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcReZ2KkMMhe8qAL-GPXUccplFDUaIDrnv6JN6kH1vPsh80qBpaKTDJyx-LQWifSm6usHiylEZgN6iemhsbna4mMgA",
        rating: 4.5,
        ratingCount: 4937,
      },
      {
        key: "category_3",
        name: "View Spot",
        imageUrl:
          "https://www.holidify.com/images/cmsuploads/compressed/Suicide_point_20170421165144.jpg",
        rating: 4.5,
        ratingCount: 4937,
      },
      {
        key: "category_4",
        name: "Lake",
        imageUrl:
          "https://www.holidify.com/images/cmsuploads/compressed/Suicide_point_20170421165144.jpg",
        rating: 4.5,
        ratingCount: 4937,
      },
      {
        key: "category_1",
        name: "Hill",
        imageUrl:
          "https://www.holidify.com/images/cmsuploads/compressed/Suicide_point_20170421165144.jpg",
        rating: 4.5,
        ratingCount: 4937,
      },
    ];
    this.setState({ spotPlaces });
  };

  render = () => {
    const { spotPlaces } = this.state;
    const { spotDetails, navigation } = this.props;
    const { name } = spotDetails;
    return (
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 10,
              flex: 10,
            }}
          >
            {name}
          </Text>
          <Text
            style={{ color: "blue", flex: 2 }}
            onPress={() => Linking.openURL("http://google.com")}
          >
            See all
          </Text>
        </View>
        {spotPlaces.length !== 0 ? (
          <ScrollView
            ref={(scrollView) => {
              this.scrollView = scrollView;
            }}
            style={styles.container}
            horizontal={true}
            snapToAlignment={"center"}
            showsHorizontalScrollIndicator={false}
            contentInset={{
              top: 0,
              left: 30,
              bottom: 0,
              right: 30,
            }}
          >
            {spotPlaces.map((category) => (
              <SpotImageCardComponent
                key={category.key}
                category={category}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        ) : (
          <View></View>
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {},
});

export default SpotDetailsScreen;
