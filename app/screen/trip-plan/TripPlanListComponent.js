import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CreateCustomTourPlanComponent from "./CreateCustomTourPlanComponent";
import TripPlanCardComponent from "./TripPlanCardComponent";

class TripPlanListComponent extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const { tourPlanList, navigation } = this.props;
    return (
      <View>
        {tourPlanList.length !== 0 ? (
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
            {tourPlanList.map((tourPlan, idx) => (
              <TouchableOpacity
                key={`tourPlan_key_${idx}`}
                onPress={() =>
                  navigation.navigate("ShowTourPlanDetailsComponent", {
                    tourPlan: tourPlan,
                  })
                }
              >
                <TripPlanCardComponent tourPlan={tourPlan} />
              </TouchableOpacity>
            ))}
            <CreateCustomTourPlanComponent />
          </ScrollView>
        ) : (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {},
});

export default TripPlanListComponent;
