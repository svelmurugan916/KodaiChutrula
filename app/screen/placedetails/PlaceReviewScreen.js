import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";

class PlaceReviewScreen extends Component {
  render = () => {
    return (
      <View>
        <ScrollView nestedScrollEnabled={true}>
          <Text>This is Review Tab</Text>
        </ScrollView>
      </View>
    );
  };
}

export default PlaceReviewScreen;
