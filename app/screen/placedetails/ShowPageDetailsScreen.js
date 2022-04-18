import React, { Component } from "react";
import AnimationHeaderScreen from "../animation/AnimationHeaderScreen";
import PlaceDetailsScreen from "./PlaceDetailsScreen";
import { View, Text } from "react-native";

class ShowPageDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const {
      route: { params, key },
      navigation,
    } = this.props;
    const { placeId, bannerImageUrl, headerTitle } = params;
    return (
      <AnimationHeaderScreen
        key={key}
        bannerImageUrl={bannerImageUrl}
        navigation={navigation}
        headerTitle={headerTitle}
      >
        <PlaceDetailsScreen navigation={navigation} placeId={placeId} />
      </AnimationHeaderScreen>
    );
  };
}

export default ShowPageDetailsScreen;
