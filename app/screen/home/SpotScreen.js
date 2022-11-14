import React, { Component } from "react";
import { View, Text } from "react-native";
import SpotDetailsScreen from "../spot/SpotDetailsScreen";
import { getResponse } from "../../component/RequestService";

class SpotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
    };
  }

  fetchAllSpots = () => {
    getResponse(
      "get",
      (response) => {
        if (response !== undefined) {
          const { data } = response;
          this._isMounted &&
            this.setState({
              spots: data,
            });
        }
      },
      "spot/list"
    );
  };

  componentDidMount = () => {
    this._isMounted = true;
    this.fetchAllSpots();
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render = () => {
    const { navigation } = this.props;
    const { spots } = this.state;
    return (
      <View>
        {spots.length !== 0 ? (
          spots.map((spotDetails) => (
            <SpotDetailsScreen
              key={spotDetails.id}
              spotDetails={spotDetails}
              navigation={navigation}
            />
          ))
        ) : (
          <View></View>
        )}
      </View>
    );
  };
}

export default SpotScreen;
