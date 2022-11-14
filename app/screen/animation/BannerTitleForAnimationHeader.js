import React, { Component } from "react";
import { View, Text } from "react-native";

class BannerTitleForAnimationHeader extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const { bannerTitle } = this.props;
    let bannerMainTitle, bannerSubTitle;
    if (bannerTitle !== undefined) {
      bannerMainTitle = bannerTitle.bannerMainTitle;
      bannerSubTitle = bannerTitle.bannerSubTitle;
    }
    return (
      <>
        {bannerTitle !== undefined && (
          <View
            style={{
              position: "absolute",
              bottom: 30,
              left: 20,
              width: "70%",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 26,
                  fontFamily: "Poppins-Bold",
                  color: "white",
                }}
                numberOfLines={2}
              >
                {bannerMainTitle}
              </Text>
            </View>
            {bannerSubTitle !== undefined && (
              <View style={{ flexDirection: "row" }}>
                {bannerSubTitle.main !== undefined && (
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      fontFamily: "Poppins-Bold",
                    }}
                  >
                    {bannerSubTitle.main}
                  </Text>
                )}
                {bannerSubTitle.sub !== undefined && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontFamily: "Poppins-Regular",
                      alignSelf: "center",
                    }}
                  >
                    {"  "}
                    {bannerSubTitle.sub}
                  </Text>
                )}
              </View>
            )}
          </View>
        )}
      </>
    );
  };
}

export default BannerTitleForAnimationHeader;
