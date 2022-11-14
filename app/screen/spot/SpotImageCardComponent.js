import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";
import CachedImageComponent from "../card/CachedImageComponent";

class SpotImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category, navigation } = this.props;
    const { name, imageUrl, rating, ratingCount } = category;
    return (
      <TouchableOpacity
        style={{
          marginLeft: 0,
          marginRight: 10,
        }}
        onPress={() =>
          navigation.navigate("ShowPageDetailsScreen", {
            headerTitle: name,
            bannerImageUrl: imageUrl,
          })
        }
      >
        <View
          style={{
            backgroundColor: "#eee",
            borderRadius: 10,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "#efefef",
          }}
        >
          <View style={{ width: 232, overflow: "hidden" }}>
            <View style={{ width: "100%", aspectRatio: 16 / 9 }}>
              <CachedImageComponent
                uri={imageUrl}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <View
              style={{
                padding: 10,
                width: "100%",
                bottom: 0,
                backgroundColor: "#fff",
              }}
            >
              <Text style={{ fontSize: 16 }}>{name}</Text>
              <View style={{ flex: 2, marginTop: 5, flexDirection: "row" }}>
                <Text style={{ color: "rgb(112, 117, 122)", fontSize: 10 }}>
                  2.5
                </Text>
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
                <Text
                  style={{
                    fontSize: 10,
                    color: "rgb(112, 117, 122)",
                  }}
                >
                  (284)
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  color: "rgb(112, 117, 122)",
                  paddingTop: 5,
                }}
                numberOfLines={1}
              >
                Manmade lake in picturesque surrounds
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SpotImageCardComponent;
