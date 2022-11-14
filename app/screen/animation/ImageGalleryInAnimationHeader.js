import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CachedImageComponent from "../card/CachedImageComponent";
import { connect } from "react-redux";
import { setImagesForPlace } from "../../redux/redux-action-creator";
import {
  blackBlurColor,
  topNavigationImageGalleryHeight,
  topNavigationImageGalleryWidth,
} from "../../constants";

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
class ImageGalleryInAnimationHeader extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { placeImageDataJson } = this.props;
    let placeImageList, totalPlaceImageCount;
    if (placeImageDataJson !== undefined) {
      placeImageList = placeImageDataJson.placeImageList;
      totalPlaceImageCount = placeImageDataJson.totalPlaceImageCount;
    }
    return (
      <View style={styles.imageGalleryVerticalView}>
        {placeImageList !== undefined && placeImageList.length > 0
          ? placeImageList.map((image, i) => (
              <View
                style={[styles.topNavigationViewStyle]}
                key={`place_icon_images_${image.id}_${i}`}
              >
                <CachedImageComponent
                  blurRadius={i === 2 && totalPlaceImageCount > 3 ? 1 : 0}
                  uri={image.imageUrl}
                  style={[
                    i === 2 && totalPlaceImageCount > 3 && styles.blurEffect,
                    styles.galleryImageIconStyle,
                  ]}
                />
                {i === 2 && totalPlaceImageCount > 3 && (
                  <View style={styles.moreImageView}>
                    <Text style={styles.moreImagesText}>
                      +{totalPlaceImageCount - 2}
                    </Text>
                  </View>
                )}
              </View>
            ))
          : [...Array(3)].map((e, i) => (
              <View
                style={[styles.topNavigationViewStyle]}
                key={`place_icon_images_${i}`}
              >
                <CachedImageComponent
                  style={[
                    i === 2 && styles.blurEffect,
                    styles.galleryImageIconStyle,
                  ]}
                />
              </View>
            ))}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  imageGalleryVerticalView: {
    position: "absolute",
    bottom: 30,
    right: 15,
  },
  topNavigationViewStyle: {
    borderRadius: 12,
    margin: 3,
    backgroundColor: "#cfcdcd6b",
  },
  blurEffect: {
    backgroundColor: "#e1e4e8",
  },
  galleryImageIconStyle: {
    width: topNavigationImageGalleryWidth,
    height: topNavigationImageGalleryHeight,
    margin: 5,
    borderRadius: 12,
  },

  moreImageView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: blackBlurColor,
    borderRadius: 12,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  moreImagesText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGalleryInAnimationHeader);
