import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";

class PlaceInfoScreen extends Component {
  render = () => {
    const { isOpened, placeAddressInfo, reviewContent, placeName } = this.props;
    const { reviewRating, reviewCount } = reviewContent;
    return (
      <View
        style={{
          padding: 15,
          borderBottomColor: "#dadce0",
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "rgb(32, 33, 36)",
          }}
        >
          {placeName}
        </Text>
        <View style={{ marginTop: 3, flexDirection: "row" }}>
          <Text style={styles.pageInfoSubTextDesign}>{reviewRating}</Text>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={13}
            readonly
            selectedColor={1}
            onFinishRating={this.ratingCompleted}
            showRating={false}
            ratingColor={"red"}
            style={{ padding: 2, paddingRight: 4, paddingLeft: 4 }}
          />
          <Text style={styles.pageInfoSubTextDesign}>({reviewCount})</Text>
        </View>
        <View style={{ marginTop: 3, flexDirection: "row" }}>
          <Text style={styles.pageInfoSubTextDesign}>{placeAddressInfo}</Text>
          {isOpened !== undefined && (
            <>
              <Text> - </Text>
              {isOpened ? (
                <Text style={{ fontSize: 14, color: "green" }}>Open</Text>
              ) : (
                <Text style={{ fontSize: 14, color: "rgba(217,48,37,1.0)" }}>
                  Closed
                </Text>
              )}
            </>
          )}
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  pageInfoSubTextDesign: {
    fontSize: 14,
    color: "rgb(60, 64, 67)",
  },
});

export default PlaceInfoScreen;
