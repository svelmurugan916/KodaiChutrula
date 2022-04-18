import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import ImageCardComponent from "../card/ImageCardComponent";
import { getResponse } from "../../component/RequestService";
import CategoryLoaderComponent from "../loader/CategoryLoaderComponent";

const { width } = Dimensions.get("window");

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryListData: [],
    };
  }

  fetchAllCategory = () => {
    getResponse(
      "get",
      (response) => {
        if (response !== undefined) {
          const { data } = response;
          this.setState({
            categoryListData: data,
          });
          if (data.length !== 0) {
            setTimeout(() => {
              this.scrollView.scrollTo({ x: -30 });
            }, 1); // scroll view position fix
          }
        }
      },
      "spotCategory/list"
    );
  };

  componentDidMount = () => {
    this.fetchAllCategory();
  };

  render = () => {
    const { categoryListData } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
          Select Categories
        </Text>
        {categoryListData.length !== 0 ? (
          <ScrollView
            ref={(scrollView) => {
              this.scrollView = scrollView;
            }}
            style={styles.container}
            horizontal={true}
            snapToAlignment={"center"}
            showsHorizontalScrollIndicator={false}
            contentInset={{
              top: 0,
              left: 30,
              bottom: 0,
              right: 30,
            }}
          >
            {categoryListData.map((category) =>
              category.active ? (
                <TouchableOpacity
                  key={category.id}
                  onPress={() =>
                    navigation.navigate("SpotsForCategory", {
                      headerTitle: category.name,
                      bannerImageUrl: category.iconUrl,
                      categoryId: category.id,
                    })
                  }
                >
                  <ImageCardComponent category={category} />
                </TouchableOpacity>
              ) : (
                <></>
              )
            )}
          </ScrollView>
        ) : (
          <CategoryLoaderComponent />
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {},
});

export default CategoryScreen;
