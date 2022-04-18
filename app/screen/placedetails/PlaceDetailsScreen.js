import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import ImageVerticalSlider from "./ImageVerticalSlider";
import PlaceDetailsTabViewScreen from "./PlaceDetailsTabViewScreen";
import PlaceInfoScreen from "./PlaceInfoScreen";
import { getResponse } from "../../component/RequestService";

class PlaceDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeDetails: {},
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
    const { placeId } = this.props;
    this.getPlaceDetails(placeId);
  };

  getPlaceDetails = (placeId) => {
    if (placeId !== undefined) {
      getResponse(
        "get",
        (response) => {
          if (response !== undefined) {
            const { data } = response;
            this.setState({
              placeDetails: data,
            });
          }
        },
        `place/get/${placeId}`
      );
    }
  };

  render = () => {
    const { placeDetails } = this.state;
    let placeImagesData;
    const { name } = placeDetails;
    const { imageGroupForPlace } = placeDetails;
    if (imageGroupForPlace !== undefined) {
      const { placeImages } = imageGroupForPlace;
      placeImagesData = placeImages;
    }

    const reviewContent = {
      reviewRating: "4.0",
      reviewCount: 288,
    };
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
      >
        {placeImagesData !== undefined && placeImagesData.length !== 0 ? (
          <ImageVerticalSlider placeImages={placeImagesData} />
        ) : (
          <></>
        )}
        <View>
          <PlaceInfoScreen
            placeName={name}
            isOpened={undefined}
            placeAddressInfo={"Park in Kodaikanal, Tamil Nadu"}
            reviewContent={reviewContent}
          />
          <View>
            <PlaceDetailsTabViewScreen navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {},
});

export default PlaceDetailsScreen;
