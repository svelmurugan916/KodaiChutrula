import React, { Component } from "react";
import { View, Text } from "react-native";
import ImageView from "react-native-image-viewing";
import ShowImageScreen from "./ShowImageScreen";

class AppImageGalleryView extends Component {
  constructor(props) {
    super(props);
  }
  indexChange = (i) => {
    console.log("Closedd -- ", i);
  };
  render = () => {
    const { visible, setVisible, imageNames, images } = this.props;
    console.log("imageNames -- ", imageNames[0]);
    return (
      <View>
        <ImageView
          HeaderComponent={ShowImageScreen}
          images={images}
          imageIndex={0}
          visible={visible}
          onImageIndexChange={(e) => this.indexChange(e)}
          onRequestClose={() => setVisible(false)}
          FooterComponent={(imageIndex) => (
            <View>
              <Text>footer</Text>
            </View>
          )}
        />
      </View>
    );
  };
}

export default AppImageGalleryView;
