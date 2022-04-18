import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from "react-native";

import MapView from "react-native-maps";

const Images = [
  {
    uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/02/74/36/photo3jpg.jpg?w=1200&h=-1&s=1",
  },
  {
    uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/cd/f0/2f/20180117-162819-largejpg.jpg?w=1200&h=-1&s=1",
  },
  {
    uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/9d/63/3a/berijam-lake.jpg?w=1100&h=-1&s=1",
  },
  {
    uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a7/9f/46/the-misty-lake.jpg?w=1200&h=-1&s=1",
  },
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT * 1.2;

class AnimatedMapViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          coordinate: {
            latitude: 10.2249,
            longitude: 77.3606,
          },
          title: "Mannavanur Lake",
          description: "This is the best lake in Kodaikanal",
          image: Images[0],
        },
        {
          coordinate: {
            latitude: 10.2530601332,
            longitude: 77.5015007989,
          },
          title: "Kurinji Andavar Temple",
          description: "This is the exotic place to visit",
          image: Images[1],
        },
        {
          coordinate: {
            latitude: 10.1841,
            longitude: 77.396,
          },
          title: "Berijam Lake",
          description: "This is the best place for photography",
          image: Images[2],
        },
        {
          coordinate: {
            latitude: 10.2344,
            longitude: 77.4863,
          },
          title: "Kodaikanal Lake",
          description: "This is best lake for boating in Kodaikanal",
          image: Images[3],
        },
      ],
      region: {
        latitude: 10.2249,
        longitude: 77.3606,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
    };
    this.animation = new Animated.Value(0);
  }

  componentDidMount = () => {
    // this.index = 0;
    // this.animation = new Animated.Value(0);
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  };

  render = () => {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH,
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });
    return (
      <View style={styles.container}>
        <MapView
          ref={(map) => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}
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
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>
                  {marker.title}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    elevation: 2,
    borderRadius: 10,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

export default AnimatedMapViewScreen;
