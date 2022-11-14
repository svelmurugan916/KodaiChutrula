import React, { Component } from "react";
import { View, Text } from "react-native";
import TripPlanListComponent from "./TripPlanListComponent";

class TripPlanInitComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourPlanList: [],
    };
  }

  componentDidMount = () => {
    this.buildTourPlanMap();
  };

  buildTourPlanMap = () => {
    this.setState({
      tourPlanList: [
        {
          name: "Valley Tour",
          price: "Rs: 300 / head",
          shortPrice: 300,
          PlacesCovered: 10,
          bannerImage:
            "https://images.thrillophilia.com/image/upload/s--SN1_lbNs--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/256/918/original/1589200335_shutterstock_1373319851_(1).jpg.jpg?1589200334",
          timing: {
            start: "10:00",
            end: "14:00",
          },
          tourAvailableDays: ["Wednesday", "Saturday"],
          placeTiming: [
            {
              name: "Upper lake view",
              visitTime: "10:00 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Rose garden",
              visitTime: "10:30 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Moir point view",
              visitTime: "11:00 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Pine forest: Cine shooting",
              visitTime: "11:30 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Devil's kitchen - Guna cave",
              visitTime: "12:00 PM",
              placeBannerImageUrl: "",
            },
            {
              name: "Pillar rock",
              visitTime: "12:30 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Green valley view",
              visitTime: "01:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Liril falls",
              visitTime: "01:15 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Coaker's walk",
              visitTime: "01:30 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Bryant park",
              visitTime: "01:45 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Kodaikanal lake or Hotel drop",
              visitTime: "02:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
          ],
        },
        {
          name: "Forest tour",
          price: "Rs: 400 / head",
          shortPrice: 400,
          PlacesCovered: 6,
          bannerImage:
            "https://res.cloudinary.com/https-highape-com/image/upload/q_auto:eco,f_auto,h_530/v1566560872/eodpbkxxu3kr3zqyolzh.jpg",
          timing: {
            start: "10:00",
            end: "14:00",
          },
          tourAvailableDays: ["Monday", "Thursday"],
          placeTiming: [
            {
              name: "Silent valley view",
              visitTime: "10:00 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Fire tower / Berijam lake view",
              visitTime: "10:30 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Cop's fly valley",
              visitTime: "11:30 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Madhikettan salai",
              visitTime: "12:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Berijam lake",
              visitTime: "01:00 PM",
              placeBannerImageUrl: "",
            },
            {
              name: "Kodai lake (or) Hotel drop",
              visitTime: "02:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
          ],
        },
        {
          name: "Trekking",
          price: "Rs: 300 / head",
          shortPrice: 300,
          PlacesCovered: 6,
          bannerImage:
            "https://luangnamthatrek.com/wp-content/uploads/2015/12/DSC_0300-1-1800x1200.jpg",
          timing: {
            start: "10:00",
            end: "14:00",
          },
          tourAvailableDays: ["Tuesday", "Friday"],
          placeTiming: [
            {
              name: "Vattakanal falls",
              visitTime: "10:00 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Mountain beauty",
              visitTime: "11:00 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Echo rock",
              visitTime: "12:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Dolphin nose",
              visitTime: "12:30 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "500 years old tree",
              visitTime: "01:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Kodai lake (or) Hotel drop",
              visitTime: "02:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
          ],
        },
        {
          name: "Village tour",
          price: "Rs: 500 / head",
          shortPrice: 500,
          PlacesCovered: 10,
          bannerImage:
            "https://catalog.wlimg.com/4/266658/full-images/poombarai-village-84631.png",
          timing: {
            start: "10:00",
            end: "16:00",
          },
          tourAvailableDays: ["Sunday"],
          placeTiming: [
            {
              name: "Palani view",
              visitTime: "10:00 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Mahalakshmi temple",
              visitTime: "11:00 AM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Poombarai village view",
              visitTime: "12:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Sheep farm / rabbit form",
              visitTime: "01:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Mannavanur lake view",
              visitTime: "02:00 PM",
              placeBannerImageUrl: "",
            },
            {
              name: "Mannavanur lake",
              visitTime: "03:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
            {
              name: "Kodai lake (or) Hotel Drop",
              visitTime: "04:00 PM",
              placeInfo: "",
              placeBannerImageUrl: "",
            },
          ],
        },
      ],
    });
  };

  render = () => {
    const { navigation } = this.props;
    const { tourPlanList } = this.state;
    return (
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            fontFamily: "Poppins-SemiBold",
            color: "#3E3E3E",
          }}
        >
          Tour packages
        </Text>
        <TripPlanListComponent
          tourPlanList={tourPlanList}
          navigation={navigation}
        />
      </View>
    );
  };
}

export default TripPlanInitComponent;
