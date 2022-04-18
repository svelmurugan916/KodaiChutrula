import React, { useRef } from "react";
import { ScrollView, Text, View, Animated } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import AnimatedHeader from "./AnimatedHeader";
import HotelDetailsScreen from "./HotelDetailsScreen";

export default function HotelViewScreen() {
  const DATA = [
    {
      id: 1,
      title: "The Hunger Games",
    },
    {
      id: 2,
      title: "Harry Potter and the Order of the Phoenix",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
    },
    {
      id: 5,
      title: "Twilight",
    },
    {
      id: 6,
      title: "The Book Thief",
    },
    {
      id: 7,
      title: "The Chronicles of Narnia",
    },
    {
      id: 8,
      title: "Animal Farm",
    },
    {
      id: 9,
      title: "Gone with the Wind",
    },
    {
      id: 10,
      title: "The Shadow of the Wind",
    },
    {
      id: 11,
      title: "The Fault in Our Stars",
    },
    {
      id: 12,
      title: "The Hitchhiker's Guide to the Galaxy",
    },
    {
      id: 13,
      title: "The Giving Tree",
    },
    {
      id: 14,
      title: "Wuthering Heights",
    },
    {
      id: 15,
      title: "The Da Vinci Code",
    },
  ];

  const offset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        <AnimatedHeader animatedValue={offset} />
        <ScrollView
          style={{ flex: 1, backgroundColor: "#f8f8f8" }}
          contentContainerStyle={{
            paddingTop: 370,
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >
          <View>
            <HotelDetailsScreen />
            {DATA.map((d) => (
              <View key={d.id}>
                <Text style={{ padding: 20 }}>{d.title}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
