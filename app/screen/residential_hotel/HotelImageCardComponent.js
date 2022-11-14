import * as React from "react";
import { Text, View, Image, Card } from "react-native";
import { Rating } from "react-native-ratings";
import { Entypo } from "@expo/vector-icons";

class HotelImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category } = this.props;
    const { name, imageUrl } = category;
    console.log("imageUrl -- ", imageUrl);
    return (
      <View style={{ marginLeft: 0, marginRight: 10 }}>
        <View
          style={{
            backgroundColor: "white",
            borderColor: "#e9e8e8",
            borderStyle: "solid",
            borderWidth: 0.5,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <View style={{ height: 200, width: 300, overflow: "hidden" }}>
            <Image
              source={imageUrl}
              style={{
                width: 300,
                height: "100%",
              }}
            />
          </View>

          <View style={{ padding: 10, width: 300, flexDirection: "row" }}>
            <View style={{ flex: 8 }}>
              <Text style={{ color: "black", fontWeight: "bold" }}>{name}</Text>
              <View style={{ flexDirection: "row" }}>
                <Entypo
                  name="location-pin"
                  size={12}
                  color="grey"
                  style={{ paddingTop: 3 }}
                />
                <Text style={{ color: "grey", fontSize: 12 }}>
                  1 mile from city
                </Text>
              </View>
            </View>
            <View style={{ flex: 2, marginTop: 5 }}>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={10}
                readonly
                fractions={4}
                onFinishRating={this.ratingCompleted}
                showRating={false}
              />
              <Text style={{ fontSize: 10, color: "grey", paddingTop: 2 }}>
                284 reviews
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HotelImageCardComponent;
