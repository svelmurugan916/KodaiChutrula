import React, { Component } from "react";
import { Image } from "react-native";
import shorthash from "shorthash";
import * as FileSystem from "expo-file-system";

class CacheImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSource: null,
    };
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  componentDidMount = async () => {
    this._isMounted = true;
    const { uri } = this.props;
    const name = shorthash.unique(uri);
    console.log("name: ", name);
    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
      console.log("read image from cache.");
      this._isMounted &&
        this.setState({
          imgSource: image.uri,
        });
      return;
    }
    console.log("download image and show");
    const newImage = await FileSystem.downloadAsync(uri, path);
    this._isMounted &&
      this.setState({
        uri: newImage.uri,
      });
  };

  render = () => {
    const { style } = this.props;
    const { imgSource } = this.state;
    console.log("imgSource: ", imgSource);
    return <Image style={style} source={imgSource} />;
  };
}

export default CacheImageComponent;
