import React, { Component } from "react";
import { StyleSheet, Platform, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  onChangeSearch = (query) => {
    console.log("query - ", query);
    this._isMounted &&
      this.setState({
        searchQuery: query,
      });
  };

  render = () => {
    const { searchQuery } = this.state;
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Searchbar
          style={styles.search_bar}
          placeholder="Search spots"
          onChangeText={this.onChangeSearch}
          value={searchQuery}
          iconColor="black"
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  search_bar: {
    backgroundColor: "#fff",
    alignItems: "center",
    fontSize: 8,
    width: "90%",
    marginTop: 5,
    fontFamily: "Poppins-SemiBold",
  },
});

export default SearchComponent;
