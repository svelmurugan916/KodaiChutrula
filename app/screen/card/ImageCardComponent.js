import * as React from "react";
import { Text, View, Image } from "react-native";
import CachedImageComponent from "./CachedImageComponent";

class ImageCardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category } = this.props;
    const { name, iconUrl, placeCount } = category;
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 0,
          marginRight: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#eee",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <View style={{ height: 250, width: 155, overflow: "hidden" }}>
            <CachedImageComponent
              uri={iconUrl}
              style={{
                width: 155,
                height: "100%",
              }}
            />
          </View>
          <View
            style={{
              padding: 10,
              paddingTop: 5,
              width: 155,
              position: "absolute",
              bottom: 0,
              backgroundColor: "rgba(52, 52, 52, 0.5)",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontFamily: "Poppins-Regular",
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 9,
                fontFamily: "Poppins-Light",
              }}
            >
              {placeCount} Place(s)
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ImageCardComponent;
