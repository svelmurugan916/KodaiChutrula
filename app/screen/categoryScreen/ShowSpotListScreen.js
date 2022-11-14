import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import DetailedPlaceListScreen from "../placedetails/DetailedPlaceListScreen";
import CategoryInfoScreen from "./CategoryInfoScreen";
import { getResponse } from "../../component/RequestService";
import { connect } from "react-redux";
import { setPlacesForCategory } from "../../redux/redux-action-creator";

const mapStateToProps = (state) => {
  return {
    categoryPlaceDetails: state.categoryPlaceDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPlacesForCategory: (categoryPlaceList) => {
      dispatch(setPlacesForCategory(categoryPlaceList));
    },
  };
};

class ShowSpotListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeList: [],
      isLoaded: false,
      isLoadingMoreEnable: false,
      isShowLoadMoreButton: false,
      offset: 0,
      placeCount: 0,
    };
    this.offset = 0;
  }

  componentDidMount = () => {
    const { categoryData } = this.props;
    this._isMounted = true;
    this.getPlaceCount(categoryData.id);
    this.getCategoryDetails(categoryData.id);
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  getPlaceCount = (categoryId) => {
    if (categoryId !== undefined) {
      getResponse(
        "get",
        (response) => {
          if (response !== undefined) {
            const { data } = response;
            this._isMounted &&
              this.setState({
                placeCount: data.placeCount,
              });
          }
        },
        `spotCategory/getPlaceCount/${categoryId}`
      );
    }
  };

  clickLoadMorePlaceButton = () => {
    const { categoryData } = this.props;
    this.offset += 5;
    this._isMounted &&
      this.setState({
        isLoadingMoreEnable: true,
      });
    this.getCategoryDetails(categoryData.id);
  };

  getCategoryDetails = (categoryId) => {
    if (categoryId !== undefined) {
      getResponse(
        "get",
        (response) => {
          if (response !== undefined) {
            const { data } = response;
            let isShowLoadMoreButton = false;
            const { placeList } = data;
            if (placeList !== undefined && data.placeList.length === 5) {
              isShowLoadMoreButton = true;
            }
            console.log("placeList -- ", placeList);
            this._isMounted &&
              this.setState({
                placeList: [...this.state.placeList, ...placeList],
                isLoaded: true,
                isShowLoadMoreButton: isShowLoadMoreButton,
                isLoadingMoreEnable: false,
              });
            // this.props.setPlacesForCategory({
            //   categoryId: categoryId,
            //   placeList: this.state.placeList,
            // });
          }
        },
        `place/getPlaces/${categoryId}/${this.offset}/5`
      );
    }
  };

  render = () => {
    const { categoryData } = this.props;
    const {
      placeList,
      isLoaded,
      isShowLoadMoreButton,
      isLoadingMoreEnable,
      placeCount,
      categoryPlaceDetails,
    } = this.state;
    console.log("categoryPlaceList -- ", categoryPlaceDetails);
    const { navigation, title } = this.props;
    return (
      <View>
        {isLoaded && (
          <View>
            <View>
              <CategoryInfoScreen
                placeName={title}
                isOpened={undefined}
                placeAddressInfo={`${title} in Kodaikanal, Tamil Nadu`}
              />
            </View>
            <View style={{ padding: 15 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "rgb(60, 64, 67)",
                  fontWeight: "bold",
                }}
              >
                {placeCount} Places{" "}
                <Text style={{ fontWeight: "normal", fontSize: 14 }}>
                  in {categoryData.name}
                </Text>
              </Text>
            </View>
            {placeList.map((placeDetails) => (
              <DetailedPlaceListScreen
                key={`cat_${categoryData.id}_place_${placeDetails.id}`}
                placeDetails={placeDetails}
                navigation={navigation}
              />
            ))}
            {isShowLoadMoreButton && (
              <View style={styles.loadBtnView}>
                {isLoadingMoreEnable ? (
                  <Button title="Loading..." disabled />
                ) : (
                  <Button
                    title="Load More"
                    onPress={this.clickLoadMorePlaceButton}
                  />
                )}
              </View>
            )}
          </View>
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  loadBtnView: {
    width: 150,
    padding: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowSpotListScreen);
