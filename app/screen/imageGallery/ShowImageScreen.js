import React, { Component } from "react";
import { Text, View } from "react-native";

class ShowImageScreen extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    console.log("props -- ", this.props);
    return (
      <View>
        <Text style={{ color: "#fff" }}>Hai</Text>
      </View>
    );
  };
}

export default ShowImageScreen;
