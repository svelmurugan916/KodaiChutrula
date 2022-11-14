import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Constants from "expo-constants";
import * as Location from "expo-location";

class GoogleMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 10.243937,
        longitude: 77.42559,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [],
      coordinate: {
        latitude: 10.243937,
        longitude: 77.42559,
      },
    };
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  componentDidMount = () => {
    this._isMounted = true;
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      this.setLocation(location);
    })();
  };

  setLocation = (location) => {
    const {
      coords: { latitude, longitude },
    } = location;
    // const region = {
    //   latitude,
    //   longitude,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // };
    // this.setState({
    //   region: region,
    //   coordinate: {
    //     latitude: latitude,
    //     longitude: longitude,
    //   },
    // });
  };

  onRegionChange = (region) => {
    this._isMounted && this.setState({ region });
  };

  onMapClick = (event) => {
    const eventCoordinate = event.nativeEvent.coordinate;
    const { markers } = this.state;
    const marker = {
      latlng: eventCoordinate,
      title: "dummy",
      description: "dummy desc",
    };
    this._isMounted &&
      this.setState({
        markers: [...markers, marker],
      });
    console.log("coordinate -- ", event.nativeEvent.coordinate);
  };

  onMapLongPress = (region) => {
    const { coordinate: LatLng, position: Point } = region;
    console.log("coordinate -- ", LatLng);
    console.log("Point -- ", Point);
  };

  render = () => {
    const { region } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          region={region}
          provider={PROVIDER_GOOGLE}
          onPress={this.onMapClick}
          onLongPress={this.onMapLongPress}
          mapType={"standard"}
          showsUserLocation={true}
          userLocationPriority={"high"}
          userLocationUpdateInterval={5000}
          userLocationFastestInterval={5000}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsPointsOfInterest={true}
          showsCompass={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          showsIndoorLevelPicker={true}
          paddingAdjustmentBehavior={"always"}
        >
          <Marker coordinate={this.state.coordinate} />
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              draggable={true}
              // image={require("../../assets/lake-view.jpg")}
            />
          ))}
        </MapView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GoogleMapComponent;
