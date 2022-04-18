import React, { Component } from "react";
import { View, Image, ScrollView, StyleSheet, Text } from "react-native";

class ImageVerticalSlider extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { placeImages } = this.props;
    return (
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{}}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {placeImages.map((placeImage) => (
              <View
                style={{ padding: 5 }}
                key={`image_slider_${placeImage.id}`}
              >
                <Image
                  source={{
                    uri: placeImage.imageUrl,
                  }}
                  style={{
                    width: 200,
                    height: 145,
                    borderRadius: 10,
                  }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };
}

export default ImageVerticalSlider;
