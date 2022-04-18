import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import HotelImageCardComponent from './HotelImageCardComponent';
const { width } = Dimensions.get('window');

class HotelComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            residentialHotelData: []
        }
    }

    componentDidMount = () => {
        this.setResidentialHotelData();
		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
	}

    setResidentialHotelData = () => {
        const residentialHotelData = [
            {
                key: "residential_2",
                name: "Kodai Resort",
                imageUrl: require("../../assets/residentialHotels/kodai_resort.jpg")
            },
            {
                key: "residential_3",
                name: "Hotel Grand Palace",
                imageUrl: require("../../assets/residentialHotels/hotel-grand-palace.jpg")
            },
            {
                key: "residential_4",
                name: "JC Residency",
                imageUrl: require("../../assets/residentialHotels/jc_residency.jpg")
            },
            {
                key: "residential_1",
                name: "The Cartlon",
                imageUrl: require("../../assets/residentialHotels/the_carlton.jpg")
            },
            {
                key: "residential_5",
                name: "Zacs Valley Resort",
                imageUrl: require("../../assets/residentialHotels/zacs_valley_resort.jpg")
            }
        ];
        this.setState({residentialHotelData})
    }



    render = () => {
        const { residentialHotelData } = this.state;
        return (
            <View style={{marginTop: 20}}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{fontWeight: "bold", fontSize: 16, marginBottom: 10, flex: 10}}>
                        Popular Residentials    
                    </Text>
                    <Text style={{color: 'blue', flex: 2}}
                        onPress={() => Linking.openURL('http://google.com')}>
                    See all
                    </Text>
                </View>
                {
                    residentialHotelData.length !== 0 ? (
                        <ScrollView 
                            ref={(scrollView) => { this.scrollView = scrollView; }}
                            style={styles.container}
                            horizontal= {true}
                            snapToAlignment={"center"}
                            showsHorizontalScrollIndicator={false}
                            contentInset={{
                                top: 0,
                                left: 30,
                                bottom: 0,
                                right: 30,
                            }}
                        >
                            {
                                residentialHotelData.map((residentialHotel) =>
                                    <HotelImageCardComponent key={residentialHotel.key} category={residentialHotel} />
                                )
                            }
                        </ScrollView>
                    ) : (<View></View>)
                }
                
                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {}
});

export default HotelComponent;