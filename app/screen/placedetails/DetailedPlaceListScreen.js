import * as React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";
import { Entypo } from "@expo/vector-icons";
import CachedImageComponent from "../card/CachedImageComponent";

class DetailedPlaceListScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeDetails, navigation } = this.props;
    const {
      id,
      name,
      placeBannerImageUrl,
      rating,
      ratingCount,
      placeOpeningStatus,
    } = placeDetails;
    return (
      <TouchableOpacity
        style={{
          marginLeft: 0,
          marginBottom: 10,
          width: "96%",
          alignSelf: "center",
        }}
        onPress={() =>
          navigation.navigate("ShowPageDetailsScreen", {
            headerTitle: name,
            bannerImageUrl: placeBannerImageUrl,
            placeId: id,
          })
        }
      >
        <View
          style={{
            backgroundColor: "#eee",
            borderRadius: 10,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "#dadce0",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <View style={{ width: "100%", overflow: "hidden" }}>
            <View style={{ width: "100%", aspectRatio: 16 / 9 }}>
              <CachedImageComponent
                uri={placeBannerImageUrl}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              {placeOpeningStatus !== undefined && (
                <View
                  style={{
                    position: "absolute",
                    bottom: 12,
                    backgroundColor: placeOpeningStatus.isOpened
                      ? placeOpeningStatus.message === "Closing soon"
                        ? "#e8701a8f"
                        : "#1a73e88f"
                      : "#e81a1a8f",
                    borderRadius: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    left: 10,
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 8 }}>
                    {placeOpeningStatus.message}
                    {/* Daily opens */}
                  </Text>
                  {placeOpeningStatus.openTime !== undefined && (
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      {placeOpeningStatus.openTime} -{" "}
                      {placeOpeningStatus.closingTime}
                      {/* 09:00 - 18:00 */}
                    </Text>
                  )}
                </View>
              )}
            </View>
            <View
              style={{
                padding: 10,
                width: "100%",
                bottom: 0,
                backgroundColor: "#fff",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "70%" }}>
                  <Text style={{ fontSize: 16 }}>{name}</Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    marginTop: 5,
                    flexDirection: "row",
                    width: "30%",
                    alignSelf: "flex-end",
                  }}
                >
                  <Text style={styles.subFontStyle}>2.5</Text>
                  <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={10}
                    readonly
                    selectedColor={1}
                    showRating={false}
                    ratingColor={"red"}
                    style={{ padding: 2, paddingRight: 4, paddingLeft: 4 }}
                  />
                  <Text style={styles.subFontStyle}>
                    (<Text style={{ fontWeight: "bold" }}>284</Text>)
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 3 }}>
                <View style={{ width: "70%" }}>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo
                      name="location-pin"
                      size={12}
                      color="grey"
                      style={{ paddingTop: 1, marginLeft: -3 }}
                    />
                    <Text
                      style={[
                        styles.subFontStyle,
                        {
                          marginLeft: 1,
                        },
                      ]}
                    >
                      Lower Shola Rd, Kodaikanal
                    </Text>
                  </View>
                </View>
                <View style={{ width: "30%" }}>
                  <Text
                    style={[
                      styles.subFontStyle,
                      {
                        alignSelf: "flex-end",
                        right: 4,
                        fontWeight: "bold",
                      },
                    ]}
                  >
                    1.5 Miles
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  subFontStyle: {
    fontSize: 10,
    color: "rgb(112, 117, 122)",
  },
});

export default DetailedPlaceListScreen;
