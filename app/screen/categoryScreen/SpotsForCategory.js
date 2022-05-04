import React, { Component } from "react";
import AnimationHeaderScreen from "../animation/AnimationHeaderScreen";
import ShowSpotListScreen from "./ShowSpotListScreen";
import { getResponse } from "../../component/RequestService";

class SpotsForCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: {},
      isLoaded: false,
    };
  }

  componentDidMount = () => {
    const {
      route: { params },
      navigation,
    } = this.props;
    const { categoryId } = params;
    console.log("catId: ", categoryId);
    this.getCategoryDetails(categoryId);
  };

  getCategoryDetails = (categoryId) => {
    if (categoryId !== undefined) {
      getResponse(
        "get",
        (response) => {
          if (response !== undefined) {
            const { data } = response;
            this.setState({
              categoryData: data.spotCategoryMap,
              isLoaded: true,
            });
          }
        },
        `spotCategory/get/${categoryId}`
      );
    }
  };

  render = () => {
    const {
      route: { params, key },
      navigation,
    } = this.props;
    const { categoryData, isLoaded } = this.state;
    const { bannerImageUrl, headerTitle } = params;
    return isLoaded ? (
      <AnimationHeaderScreen
        key={key}
        bannerImageUrl={bannerImageUrl}
        navigation={navigation}
        headerTitle={headerTitle}
      >
        <ShowSpotListScreen
          navigation={navigation}
          title={headerTitle}
          categoryData={categoryData}
        />
      </AnimationHeaderScreen>
    ) : (
      <></>
    );
  };
}

export default SpotsForCategory;
