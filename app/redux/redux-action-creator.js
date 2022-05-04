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

export { setBookMarkPlace, setPlacesForCategory };
