import React, { Component } from "react";
import { Text, View } from "react-native";
import CachedImageComponent from "../card/CachedImageComponent";

class PlaceDetailsPageHeader extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const { bannerImageUrl } = this.props;
    return (
      <View>
        <CachedImageComponent
          uri={bannerImageUrl}
          style={{
            width: "96%",
            height: 300,
            alignSelf: "center",
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        />
      </View>
    );
  };
}

export default PlaceDetailsPageHeader;
