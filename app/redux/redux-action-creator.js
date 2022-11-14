const setBookMarkPlace = (placeDetailsJson) => {
  return {
    type: "addDataIntoBookmark",
    value: placeDetailsJson,
  };
};

const setPlacesForCategory = (categoryPlaceDetails) => {
  return {
    type: "addPlaceForCategory",
    value: categoryPlaceDetails,
  };
};

const setImagesForPlace = (placeImageDataJson) => {
  return {
    type: "addImagesForPlace",
    value: placeImageDataJson,
  };
};

export { setBookMarkPlace, setPlacesForCategory, setImagesForPlace };
