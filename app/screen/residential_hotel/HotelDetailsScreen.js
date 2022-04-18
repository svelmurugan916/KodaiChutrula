import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Entypo, AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';

class HotelDetailsScreen extends Component {
    render = () => {
        return (
            <View>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex:7}}>
                        <Text style={{fontSize: 24, fontWeight: "bold"}}>
                            Lake View Apartment
                        </Text>
                        <View style={{flexDirection: "row"}}>
                            <Entypo name="location-pin" size={12} color="#CCCCCC" style={{paddingTop: 3}} />
                            <Text style={{color: "#CCCCCC", fontSize: 12, marginLeft: 3}}>
                                Sognal, Vestland, Norway
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 3}}>
                        <View style={{flex: 2, marginTop: 10, flexDirection: "row", alignSelf: "flex-end"}}>
                            
                            <AntDesign name="star" size={16} color="#FFC051" style={{marginRight: 3}} />
                            
                            <Text style={{fontSize: 12, fontWeight: "bold",color: "#3B3B3B", marginRight: 1}}>5.0</Text>
                            
                            <Text style={{fontSize: 12, color: "grey"}}>(284)</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 30}}>
                    <View>
                        <Text style={{fontSize: 14, fontWeight: "bold"}}>Details</Text>
                        <View style={{flexDirection: "row", marginTop: 5}}>
                            <Text style={{color: "#787878", marginRight: 15}}>4 guests</Text>
                            <Text style={{color: "#787878", marginRight: 15}}>2 bedrooms</Text>
                            <Text style={{color: "#787878", marginRight: 15}}>2 beds</Text>
                            <Text style={{color: "#787878", marginRight: 15}}>1 bath</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 20, flexDirection: "row"}}>
                    <ScrollView
                        horizontal= {true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{backgroundColor: "#ffffff", width: 100, height: 100, borderRadius: 10, marginRight: 10}}>
                            <AntDesign name="wifi" size={30} color="#929292" style={{ alignSelf: "center", marginTop: 20 }} />
                            <Text style={{alignSelf: "center", color:"#929292", marginTop: 15}}>Wi-fi</Text>
                        </View>
                        <View style={{backgroundColor: "#fff", width: 100, height: 100, borderRadius: 10, marginRight: 10}}>
                            <Entypo name="tv" size={30} color="#929292" style={{ alignSelf: "center", marginTop: 20 }} />
                            <Text style={{alignSelf: "center", color:"#929292", marginTop: 15}}>TV</Text>
                        </View>
                        <View style={{backgroundColor: "#fff", width: 100, height: 100, borderRadius: 10, marginRight: 10}}>
                            <MaterialCommunityIcons name="silverware-variant" size={30} color="#929292" style={{ alignSelf: "center", marginTop: 20 }} />
                            <Text style={{alignSelf: "center", color:"#929292", marginTop: 15}}>Dinner</Text>
                        </View>
                        <View style={{backgroundColor: "#fff", width: 100, height: 100, borderRadius: 10, marginRight: 10}}>
                            <MaterialIcons name="directions-car" size={30} color="#929292" style={{ alignSelf: "center", marginTop: 20 }} />
                            <Text style={{alignSelf: "center", color:"#929292", marginTop: 15}}>Parking</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default HotelDetailsScreen;