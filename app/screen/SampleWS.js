import React, { Component } from "react";
import { View, Text } from "react-native";
import WS from "react-native-websocket";

class SampleWS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  handleMessage = (e) => {
    const { data } = e;
    console.log("eeee -- ", e);
    const { messageList } = this.state;
    console.log(data);
    this._isMounted &&
      this.setState({
        messageList: [...messageList, data],
      });
  };

  render = () => {
    const { messageList } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <WS
          ref={(ref) => {
            this.ws = ref;
          }}
          url="wss://data.tradingview.com/socket.io/websocket?from=chart%2F&date=2022_05_09-17_04"
          onOpen={() => {
            console.log("Open!");
            this.ws.send("Hello");
          }}
          onMessage={(e) => this.handleMessage(e)}
          onError={console.log}
          onClose={console.log}
          reconnect // Will try to reconnect onClose
        />
        <View>
          <Text>Displayn...</Text>
          {messageList.map((msg) => (
            <>
              <Text>{msg}</Text>
            </>
          ))}
        </View>
      </View>
    );
  };
}

export default SampleWS;
