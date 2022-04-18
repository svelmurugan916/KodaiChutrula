import React, { Component } from "react";
import { ActivityIndicator, View, ScrollView } from "react-native";

class CategoryLoaderComponent extends Component {
  render = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <ScrollView
          ref={(scrollView) => {
            this.scrollView = scrollView;
          }}
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
          {[...Array(5)].map((e, i) => (
            <View
              key={`category_loading_${i}`}
              style={{
                height: 250,
                width: 155,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#d9d9d9",
                borderWidth: 1,
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <ActivityIndicator size="large" color="#3ab196" />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };
}

export default CategoryLoaderComponent;
