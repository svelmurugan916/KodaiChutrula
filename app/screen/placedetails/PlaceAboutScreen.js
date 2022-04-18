import React, { Component } from "react";
import { View, Text } from "react-native";

class PlaceAboutScreen extends Component {
  render = () => {
    return (
      <View style={{ padding: 15, backgroundColor: "#fff", height: "100%" }}>
        <Text style={{ fontSize: 15, lineHeight: 25 }}>
          One of the many elements that add to the serenity of Kodaikanal is the
          infamous Bryant Park. Situated on the eastern side of the Kodai Lake,
          the park is bejewelled with various species of plants and shrubs. They
          vary in a range of flowering plants, hybrids and grafts. Once you've
          had a stroll on the Coakers walk, the pathway will lead you towards
          the park. It is a popular spot amongst families as they can set up a
          picnic area in the park and watch their kids run around and tumble in
          the grass. The park also educates and trains students of Ornamental
          Horticulture as it is also recognised as a demonstration centre.
          {"\n"}
          {"\n"}
          Bryant Park is a popular attraction amongst tourists and locals alike.
          One section of the park is dedicated to an exotic rose garden that
          prides itself on the unique and rare species grown there. There is
          also a greenhouse where plants from all around the world thrive. The
          park also hosts an Annual Horticulture Show that draws gardening
          enthusiasts and horticulturalists. In the 2017 edition of the show,
          green roses were the main attraction that drew people from all over
          the country. Kodaikanal is deemed as one of the most serene places in
          India and Bryant Park hugely contributes to that title.
        </Text>
      </View>
    );
  };
}

export default PlaceAboutScreen;
