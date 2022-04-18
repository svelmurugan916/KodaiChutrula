import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";

class CategoryInfoScreen extends Component {
  render = () => {
    const { isOpened, placeAddressInfo, reviewContent, placeName } = this.props;
    return (
      <View
        style={{
          padding: 15,
        }}
      >
        <View style={{ flex: 8 }}>
          <Text
            style={{
              fontSize: 20,
              color: "rgb(32, 33, 36)",
            }}
          >
            {placeName}
          </Text>
        </View>

        <View style={{ marginTop: 3, flexDirection: "row" }}>
          <Text style={styles.pageInfoSubTextDesign}>{placeAddressInfo}</Text>
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

export default CategoryInfoScreen;
