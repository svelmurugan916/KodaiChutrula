import React, { Component } from "react";
import { Text, View } from "react-native";
import DetailedPlaceListScreen from "../placedetails/DetailedPlaceListScreen";
import SpotImageCardComponent from "../spot/SpotImageCardComponent";
import CategoryInfoScreen from "./CategoryInfoScreen";

class ShowSpotListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotPlaces: [],
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
    this.setCategoryData();
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
    const { categoryData } = this.props;
    const { placeList } = categoryData;
    const { spotPlaces } = this.state;
    const { navigation, title } = this.props;
    return (
      <View>
        <View>
          <CategoryInfoScreen
            placeName={title}
            isOpened={undefined}
            placeAddressInfo={`${title} in Kodaikanal, Tamil Nadu`}
          />
        </View>
        <View style={{ padding: 15 }}>
          <Text
            style={{
              fontSize: 18,
              color: "rgb(60, 64, 67)",
              fontWeight: "bold",
            }}
          >
            {placeList.length} Places{" "}
            <Text style={{ fontWeight: "normal", fontSize: 14 }}>
              in {categoryData.name}
            </Text>
          </Text>
        </View>
        {placeList.map(
          (placeDetails) => (
            // placeDetails.active ? (
            <DetailedPlaceListScreen
              key={`cat_${categoryData.id}_place_${placeDetails.id}`}
              placeDetails={placeDetails}
              navigation={navigation}
            />
          )
          // ) : (
          //   <></>
          // )
        )}
      </View>
    );
  };
}

export default ShowSpotListScreen;
