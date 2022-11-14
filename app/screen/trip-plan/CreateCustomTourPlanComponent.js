import React, { Component } from "react";
import { View, Text } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { primaryColor } from "../../constants";

class CreateCustomTourPlanComponent extends Component {
  render = () => {
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
          <View
            style={{
              width: 130,
              height: 130,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="add-circle-outline" size={128} color={"#c9c9c9"} />
          </View>
          <View style={{ marginTop: 10, marginLeft: 5 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontFamily: "Poppins-Medium", fontSize: 14 }}
                numberOfLines={1}
              >
                Custom tour
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
                    Create your tour plan
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
}

export default CreateCustomTourPlanComponent;
