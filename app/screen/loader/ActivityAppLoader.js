import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { primaryColor } from "../../constants";

class ActivityAppLoader extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const { style, color = primaryColor, size = "small" } = this.props;
    return (
      <View style={[style, styles.activityIndicatoryView]}>
        <ActivityIndicator color={color} size={size} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  activityIndicatoryView: {
    justifyContent: "center",
    borderColor: "#d7d7d7",
    borderWidth: 0.7,
    borderStyle: "solid",
  },
});

export default ActivityAppLoader;
