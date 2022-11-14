import shorthash from "shorthash";
import * as FileSystem from "expo-file-system";

export const storeOrGetFileCache = async (uri, callbackFunction) => {
  if (uri === undefined || uri.length === 0) {
    return;
  }
  const name = shorthash.unique(uri);
  const path = `${FileSystem.cacheDirectory}${name}.jpg`;
  const image = await FileSystem.getInfoAsync(path).catch((error) => {
    console.log("Api call error");
    alert(error.message);
  });
  if (image.exists) {
    callbackFunction(image.uri);
    return;
  }
  await FileSystem.downloadAsync(uri, path)
    .then(({ uri }) => {
      callbackFunction(uri);
    })
    .catch((error) => {
      console.log("Promise Rejected", error);
    });
};
