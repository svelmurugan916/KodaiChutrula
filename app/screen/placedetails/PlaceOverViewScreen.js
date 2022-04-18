import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { setBookMarkPlace } from "../../redux/redux-action-creator";

const mapStateToProps = (state) => {
  return {
    bookMarkedPlaces: state.bookMarkedPlaces,
    bookMarkedPlaceIdList: state.bookMarkedPlaceIdList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBookMarkPlace: (placeDetailsJson) => {
      dispatch(setBookMarkPlace(placeDetailsJson));
    },
  };
};

class PlaceOverViewScreen extends Component {
  constructor(props) {
    super(props);
  }

  addPlaceToBookMark = (placeDetailsJson) => {
    this.props.setBookMarkPlace(placeDetailsJson);
  };

  render = () => {
    console.log("bookmarkedData -- ", this.props.bookMarkedPlaceIdList);
    const { navigation } = this.props;
    const placeDetailsJson = {
      id: 12,
      name: "Mannavanur Lake",
      description: "This is the best lake in Kodaikanal",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a7/9f/46/the-misty-lake.jpg?w=1200&h=-1&s=1",
    };
    return (
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <View
          style={[
            {
              flexDirection: "row",
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            },
            styles.borderBottomStyle,
          ]}
        >
          <TouchableOpacity
            style={styles.iconView}
            onPress={() => navigation.navigate("AnimatedMapViewScreen")}
          >
            <MaterialIcons name="directions" size={30} color="#1a73e8" />
            <Text style={styles.iconText}>DIRECTION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconView}
            onPress={() => this.addPlaceToBookMark(placeDetailsJson)}
          >
            <MaterialIcons name="add-location-alt" size={30} color="#1a73e8" />
            <Text style={styles.iconText}>BOOKMARK</Text>
          </TouchableOpacity>
          <View style={styles.iconView}>
            <MaterialIcons name="share" size={30} color="#1a73e8" />
            <Text style={styles.iconText}>SHARE</Text>
          </View>
        </View>
        <View
          style={[
            { flexDirection: "row", padding: 15 },
            styles.borderBottomStyle,
          ]}
        >
          <MaterialCommunityIcons
            name="information"
            size={30}
            color="#1a73e8"
          />
          <View style={{ marginLeft: 10, marginRight: 30 }}>
            <Text
              style={{ color: "rgb(60, 64, 67)", fontSize: 14 }}
              numberOfLines={3}
            >
              Recreation area featuring walking/cycling paths around a manmade
              lake with small boat rentals.
            </Text>
          </View>
        </View>
        <View
          style={[
            { flexDirection: "row", padding: 15 },
            styles.borderBottomStyle,
          ]}
        >
          <MaterialIcons name="location-pin" size={30} color="#1a73e8" />
          <View style={{ marginLeft: 10, marginRight: 30 }}>
            <Text>Lower Shola Rd, Kodaikanal, Tamil Nadu 624101</Text>
          </View>
        </View>
        <View
          style={[
            { flexDirection: "row", padding: 15 },
            styles.borderBottomStyle,
          ]}
        >
          <MaterialIcons name="access-time" size={30} color="#1a73e8" />
          <View style={{ marginLeft: 10, marginRight: 30, marginTop: 5 }}>
            <Text>09:00 am – 06:00 pm. Open all days</Text>
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  iconView: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  iconText: {
    color: "#1a73e8",
    fontSize: 12,
    paddingTop: 5,
  },
  borderBottomStyle: {
    borderBottomColor: "#dadce0",
    borderBottomWidth: 1,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceOverViewScreen);
