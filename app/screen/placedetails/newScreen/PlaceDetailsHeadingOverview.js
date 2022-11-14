import React from "react";
import { StyleSheet, Text, View, FlatList, LogBox } from "react-native";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { primaryColor } from "../../../constants";

const numColumns = 2;
class PlaceDetailsHeadingOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isDataLoaded: false,
      headerOverviewData: [],
    };
  }

  componentDidMount = () => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    setTimeout(() => {
      this.setState({
        isDataLoaded: true,
        headerOverviewData: [
          {
            title: "Type",
            value: "Water Falls",
            key: "83874",
            iconName: "information",
            iconType: MaterialCommunityIcons,
            iconSize: 22,
          },
          {
            title: "Open",
            value: "9:00 - 23:00",
            key: "36774",
            iconName: "clock",
            iconType: Fontisto,
            iconSize: 22,
          },
          {
            title: "RATING",
            value: "4.8 / 5",
            key: "4567",
            iconName: "star",
            iconType: Fontisto,
            iconSize: 22,
          },
          {
            title: "Time",
            value: "30 mins",
            key: "1234",
            iconName: "timelapse",
            iconType: MaterialCommunityIcons,
            iconSize: 26,
          },
        ],
      });
    }, 100);
  };

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.item} key={`headerOverview_${index}`}>
        <View style={{ flexDirection: "row" }}>
          {/* <View style={{ justifyContent: "center" }}>
            <item.iconType
              name={item.iconName}
              size={item.iconSize}
              color={primaryColor}
            />
          </View> */}
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemValue}>{item.value}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { headerOverviewData, isDataLoaded } = this.state;
    if (!isDataLoaded) {
      <View>
        <Text>Loading....</Text>
      </View>;
    }
    return (
      <FlatList
        data={headerOverviewData}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: "#fff",
    flex: 1,
    margin: 1,
    height: 70,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemTitle: {
    fontFamily: "Poppins-Regular",
    color: "#CBCCCE",
    textTransform: "uppercase",
    fontSize: 12,
  },
  itemValue: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
export default PlaceDetailsHeadingOverview;
