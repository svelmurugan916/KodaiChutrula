import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import CachedImageComponent from "../card/CachedImageComponent";

class ImageVerticalSlider extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { placeImages } = this.props;
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {placeImages.map((placeImage, i) => (
              <View
                style={{ padding: 5 }}
                key={`image_slider_${placeImage.id}`}
              >
                <CachedImageComponent
                  blurRadius={i === 5 ? 10 : 0}
                  uri={placeImage.imageUrl}
                  style={[i === 5 && styles.blurEffect, styles.slideImageStyle]}
                />
                {i === 5 && (
                  <View style={styles.moreImageView}>
                    <Text style={styles.moreImagesText}>+7</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  blurEffect: {
    backgroundColor: "#e1e4e8",
  },
  moreImageView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  moreImagesText: {
    fontSize: 24,
    color: "#fff",
  },
  slideImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});

export default ImageVerticalSlider;
