import React, { Component } from "react";
import { View, Text } from "react-native";
import AppImageGalleryView from "../imageGallery/AppImageGalleryView";

class PlaceImageGalleryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  setVisible = (visible) => {
    this.setState({
      visible,
    });
  };

  render = () => {
    const { visible } = this.state;
    const imageNames = ["Name1", "Name2", "Name3"];
    const images = [
      {
        uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
      },
      {
        uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
      },
      {
        uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
      },
    ];
    return (
      <View>
        <AppImageGalleryView
          imageNames={imageNames}
          images={images}
          setVisible={this.setVisible}
          visible={visible}
        />
      </View>
    );
  };
}

export default PlaceImageGalleryScreen;
