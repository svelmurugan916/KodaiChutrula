import React, { Component } from "react";
import AnimationHeaderScreen from "../animation/AnimationHeaderScreen";
import PlaceDetailsScreen from "./newScreen/PlaceDetailsScreen";
import { View, ScrollView } from "react-native";
import PlaceDetailsPageHeader from "./PlaceDetailsPageHeader";

class ShowPageDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const {
      route: { params, key },
      navigation,
    } = this.props;
    const { placeId, bannerImageUrl, headerTitle } = params;
    const bannerTitleData = {
      bannerMainTitle: headerTitle,
      bannerSubTitle: {
        // main: category.placeCount,
        sub: "Lower Shola Rd, Kodaikanal",
      },
    };
    return (
      // <View>
      //   <ScrollView>
      //     <PlaceDetailsPageHeader
      //       bannerImageUrl={bannerImageUrl}
      //       navigation={navigation}
      //       headerTitle={headerTitle}
      //     />
      <AnimationHeaderScreen
        key={key}
        bannerImageUrl={bannerImageUrl}
        navigation={navigation}
        headerTitle={headerTitle}
        showLike={true}
        showImageGallery={true}
        bannerTitle={bannerTitleData}
      >
        <PlaceDetailsScreen navigation={navigation} placeId={placeId} />
      </AnimationHeaderScreen>
      //   {/* </ScrollView>
      // </View> */}
    );
  };
}

export default ShowPageDetailsScreen;
