import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import ImageVerticalSlider from "./ImageVerticalSlider";
import PlaceDetailsTabViewScreen from "./PlaceDetailsTabViewScreen";
import PlaceInfoScreen from "./PlaceInfoScreen";
import { getResponse } from "../../component/RequestService";
import { connect } from "react-redux";
import { setImagesForPlace } from "../../redux/redux-action-creator";

const mapStateToProps = (state) => {
  return {
    placeImageDataJson: state.placeImageDataJson,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setImagesForPlace: (placeImageDataJson) => {
      dispatch(setImagesForPlace(placeImageDataJson));
    },
  };
};

class PlaceDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeDetails: {},
      isDataLoaded: false,
    };
    this.props.setImagesForPlace([]);
  }

  componentDidMount = () => {
    this._isMounted = true;
    const { placeId } = this.props;
    this.getPlaceDetails(placeId);
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  getPlaceDetails = (placeId) => {
    if (placeId !== undefined) {
      getResponse(
        "get",
        (response) => {
          if (response !== undefined) {
            const { data } = response;
            const { placeImages, totalPlaceImageCount } = data;
            this._isMounted &&
              this.setState({
                placeDetails: data,
                isDataLoaded: true,
              });
            this._isMounted &&
              this.props.setImagesForPlace({
                placeImageList: placeImages,
                totalPlaceImageCount: totalPlaceImageCount,
              });
          }
        },
        `place/get/${placeId}`
      );
    }
  };

  render = () => {
    const { placeDetails, isDataLoaded, placeImageDataJson } = this.state;
    const { name, SpotCategoryDetails } = placeDetails;
    const reviewContent = {
      reviewRating: "4.0",
      reviewCount: 288,
    };
    const { navigation } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* {placeImages !== undefined && placeImages.length !== 0 && (
          <ImageVerticalSlider placeImages={placeImages} />
        )} */}
        <View>
          <PlaceInfoScreen
            placeName={name}
            isOpened={undefined}
            placeAddressInfo={"Park in Kodaikanal, Tamil Nadu"}
            reviewContent={reviewContent}
          />
          <View>
            <PlaceDetailsTabViewScreen
              navigation={navigation}
              placeDetails={placeDetails}
            />
          </View>
        </View>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {},
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailsScreen);
