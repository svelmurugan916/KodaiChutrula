import React, { Component } from "react";
import { View, Text } from "react-native";
import CachedImageComponent from "../card/CachedImageComponent";
import { FontAwesome } from "@expo/vector-icons";
import { primaryColor } from "../../constants";

class TripPlanCardComponent extends Component {
  render = () => {
    const { tourPlan } = this.props;
    return (
      <View
        style={{
          padding: 6,
          backgroundColor: "#fff",
          borderRadius: 10,
          width: 144,
          marginRight: 10,
          borderWidth: 1,
          borderColor: "#efefef",
        }}
      >
        <View>
          <View>
            <CachedImageComponent
              uri={tourPlan.bannerImage}
              style={{
                width: 130,
                height: 130,
                backgroundColor: "#fff",
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ marginTop: 10, marginLeft: 5 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontFamily: "Poppins-Medium", fontSize: 14 }}
                numberOfLines={1}
              >
                {tourPlan.name}
              </Text>
              <View style={{ right: 11 }}>
                <FontAwesome
                  name="angle-right"
                  size={16}
                  color={primaryColor}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: "Poppins-Light",
                      fontSize: 10,
                      marginTop: -4,
                    }}
                  >
                    {tourPlan.PlacesCovered}
                    {" Place(s)"}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: -2,
                  }}
                >
                  <FontAwesome name="rupee" size={12} color={primaryColor} />
                  <View>
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        fontSize: 12,
                        marginTop: -3,
                        marginLeft: 3,
                      }}
                    >
                      {tourPlan.shortPrice}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
}

export default TripPlanCardComponent;
