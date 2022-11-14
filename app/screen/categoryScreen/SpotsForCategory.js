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
    this._isMounted = true;
    const {
      route: { params },
      navigation,
    } = this.props;
    const { categoryId } = params;
    console.log("catId: ", categoryId);
    this.getCategoryDetails(categoryId);
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  getCategoryDetails = (categoryId) => {
    if (categoryId !== undefined) {
      getResponse(
        "get",
        (response) => {
          if (response !== undefined) {
            const { data } = response;
            this._isMounted &&
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
    const { bannerImageUrl, headerTitle, categoryId, bannerTitle } = params;
    console.log("bannerTitlebannerTitle -- ", bannerTitle);
    return (
      isLoaded && (
        <AnimationHeaderScreen
          key={key}
          bannerImageUrl={bannerImageUrl}
          navigation={navigation}
          headerTitle={headerTitle}
          bannerTitle={bannerTitle}
        >
          <ShowSpotListScreen
            navigation={navigation}
            title={headerTitle}
            categoryData={categoryData}
          />
        </AnimationHeaderScreen>
      )
    );
  };
}

export default SpotsForCategory;
