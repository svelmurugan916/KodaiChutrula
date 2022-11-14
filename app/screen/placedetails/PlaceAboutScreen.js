import React, { Component } from "react";
import { View } from "react-native";
import { MoreOrLess } from "@rntext/more-or-less";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

class PlaceAboutScreen extends Component {
  render = () => {
    const source = {
      html: `
    <div class="long-description"><span><img loading="lazy" src="https://edge.ixigo.com/ixi-api/img/52301a52e4b022c0dcf71f07_600x315.jpg" alt=""><br><br>There are several activities that you can enjoy while you are visiting Kodaikanal Lake some of them are:<br></span><b><br>1. Boating: </b><span>You should enjoy boating at the lake as there are several options available to choose.There are normal boats as well as luxury boats and you can go for any one of your choice or budget.<br></span><b><br>2. Flower show:</b><span> It is one of the best parts of this lake. You are taken within the lake and can ponder upon beautiful flowers of the lake. During summer, the flowers are organised chiefly along with interesting beauty peasant show.<br></span><b><br>3. Fishing:</b><span> It is another activity that can be tried and enjoyed at the lake. The lake is home to many local fish<br></span><b><br>4. Activities: </b><span>The roads around the lake also have the activities of horse riding and cycling which you can enjoy.<br></span><b><br>5. Swimming:</b><span> There are boat clubs formed which after certain enrollment or membership allows you to swim in Kodai lake.<br></span><br><h3>Attractions Near Kodaikanal Lake</h3><span><img src="https://live.staticflickr.com/8088/29560245225_dfdb40bddd_o.jpg" alt=""><br><br>There are several other attractions near the Kodaikanal Lake which you worth you visit they are:</span><p><b>1. Berijam Lake:</b> It is a reservoir with excellent water quality.It is situated at the old site of “ Fort Hamilton” in the upper part of Palani hills. It is a refreshing and scenic eye treat for nature.<br><span><br><b>2. Kodaikanal Solar Observatory:</b> Established in 1899 as Solar Physics Observatory. It has a 20cm refractor which is occasionally used for cometary and occultation observations. The Observatory has a famous astronomy museum on campus for the visitors.This place is perfect for the people who are science lovers.<br></span><span><br><b>3. Kumbakkarai Falls:</b> A beautiful fall in Kodaikanal which will refresh you thoroughly. The water originates from the Kodaikanal hills and flows along the rock and then reach the foothill. It is a good place to enjoy with your family or friends. People also see it as an amazing picnic spot.</span><br></p></div>`,
    };
    return (
      <View style={{ padding: 15, backgroundColor: "#fff", height: "100%" }}>
        <RenderHtml contentWidth={300} source={source} />
      </View>
    );
  };
}

export default PlaceAboutScreen;
