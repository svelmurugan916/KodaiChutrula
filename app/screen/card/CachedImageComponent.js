import React, { Component } from "react";
import { Image, ActivityIndicator, View, StyleSheet } from "react-native";
import { primaryColor } from "../../constants";
import { storeOrGetFileCache } from "../../utils/CacheFile";

class CachedImageComponent extends Component {
  constructor(props) {
    super(props);
    const { preview, enableLoading = false } = props;
    this.state = {
      fileCachedImagePath: undefined,
      previewImageUrl: preview,
      enableLoading: enableLoading,
    };
  }
  componentDidMount = () => {
    this._isMounted = true;
    const { uri } = this.props;
    this.cacheImageFile(uri);
  };

  cacheImageFile = async (uri) => {
    storeOrGetFileCache(uri, (imageUri) => {
      this._isMounted &&
        this.setState({
          fileCachedImagePath: imageUri,
        });
    });
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render = () => {
    const { fileCachedImagePath, previewImageUrl } = this.state;
    if (fileCachedImagePath !== undefined) {
      return <Image source={{ uri: fileCachedImagePath }} {...this.props} />;
    }
    if (previewImageUrl != null) {
      return <Image {...this.props} source={{ uri: previewImageUrl }} />;
    }
    const { style } = this.props;
    return (
      <>
        <View style={[style, styles.activityIndicatoryView]}>
          <ActivityIndicator color={primaryColor} size={"small"} />
        </View>
      </>
    );
  };
}

const styles = StyleSheet.create({
  activityIndicatoryView: {
    justifyContent: "center",
    borderColor: "#d7d7d7",
    borderWidth: 0.7,
    borderStyle: "solid",
  },
});

export default CachedImageComponent;
