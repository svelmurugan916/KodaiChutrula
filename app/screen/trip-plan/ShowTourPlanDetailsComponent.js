import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { Timeline } from "react-native-just-timeline";

class ShowTourPlanDetailsComponent extends Component {
  render = () => {
    const data = [
      // First row in the Timeline
      {
        title: {
          content: "Event One Title",
        },
        description: {
          content: "Event One Description",
        },
        time: {
          content: "Mar 7, 2020",
        },
      },

      // Second row in the Timeline
      {
        title: {
          content: "Event Two Title",
        },
        description: {
          content: "Event Two Description",
        },
        time: {
          content: "Mar 7, 2020",
        },
      },

      // You got the idea..
      {
        title: {
          content: "Event Three Title",
        },
        description: {
          content: "Event Three Description",
        },
        time: {
          content: "Mar 7, 2020",
        },
        icon: {
          content: "pencil",
        },
      },
    ];
    return (
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <Timeline data={data} />
      </View>
    );
  };
}

export default ShowTourPlanDetailsComponent;
