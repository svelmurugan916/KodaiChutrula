import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import { getResponse } from "../../component/RequestService";
import { MaterialIcons } from "@expo/vector-icons";
import CachedImageComponent from "../card/CachedImageComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BANNER_H, primaryColor } from "../../constants";

class SearchScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResultData: [],
      isFocusedInText: false,
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  onChangeSearch = (query) => {
    this._isMounted &&
      this.setState({
        searchQuery: query,
      });
    getResponse(
      "post",
      (response) => {
        if (response !== undefined) {
          const { data } = response;
          this._isMounted && this.setState({ searchResultData: data });
        }
      },
      `query`,
      { query: query }
    );
  };

  render = () => {
    console.log("primaryColor-- ", primaryColor);
    console.log("BANNER_H -- ", BANNER_H);
    const { setSearchFocused, navigation } = this.props;
    const { searchQuery, searchResultData } = this.state;
    const distance = "12.3 km";
    return (
      <View
        style={[
          styles.searchContainer,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text
          style={{
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            fontSize: 24,
            fontFamily: "Poppins-Bold",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Where do{"\n"} you wanna to go?
        </Text>
        <Searchbar
          style={styles.search_bar}
          placeholder="Search for places..."
          onChangeText={this.onChangeSearch}
          value={searchQuery}
          iconColor={primaryColor}
          inputStyle={{
            fontFamily: "Poppins-Regular",
            fontSize: 14,
            paddingTop: 5,
          }}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
        {searchResultData.length > 0 && (
          <View style={styles.placeListView}>
            {searchResultData.map((searchResult) => (
              <TouchableOpacity
                key={searchResult.id}
                onPress={() =>
                  navigation.navigate("ShowPageDetailsScreen", {
                    headerTitle: searchResult.name,
                    bannerImageUrl: searchResult.bannerImage,
                    placeId: searchResult.id,
                  })
                }
              >
                <View style={{ flexDirection: "row" }}>
                  {searchResult.bannerImage && this._isMounted !== undefined ? (
                    <View style={styles.searchPlaceImageIcon}>
                      <CachedImageComponent
                        uri={searchResult.bannerImage}
                        style={{
                          width: 40,
                          height: 27,
                          borderRadius: 2,
                        }}
                      />
                    </View>
                  ) : (
                    <MaterialIcons
                      size={22}
                      name="search"
                      style={{ flex: 1, padding: 10 }}
                    />
                  )}
                  <View style={styles.flex_10}>
                    <Text
                      style={[
                        styles.placeText,
                        styles.placeListTextStyle,
                        distance !== undefined && styles.paddingForPlaceText,
                      ]}
                    >
                      {searchResult.name}
                    </Text>
                    {distance !== undefined && (
                      <Text
                        style={[styles.locationText, styles.placeListTextStyle]}
                      >
                        <MaterialIcons
                          size={10}
                          name="location-pin"
                          style={{
                            flex: 1,
                            padding: 10,
                            color: "#919191",
                          }}
                        />{" "}
                        {distance}
                      </Text>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 5,
    alignSelf: "center",
  },
  locationText: {
    fontSize: 10,
    paddingLeft: 10,
    color: "#919191",
  },
  search_bar: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    fontFamily: "Poppins-SemiBold",
  },
  placeListTextStyle: {
    fontFamily: "Poppins-Regular",
    width: "100%",
    alignSelf: "flex-start",
  },
  placeText: {
    padding: 10,
    fontSize: 14,
  },
  paddingForPlaceText: {
    paddingBottom: 1,
    paddingTop: 5,
  },
  flex_10: {
    flex: 10,
  },
  placeListView: {
    backgroundColor: "#fff",
    width: "100%",
    elevation: 3,
    shadowColor: "#171717",
    marginBottom: 10,
    borderRadius: 3,
  },
  searchPlaceImageIcon: {
    width: 50,
    padding: 10,
    height: "auto",
  },
});

export default SearchScreenComponent;
