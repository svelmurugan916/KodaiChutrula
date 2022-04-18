const setBookMarkPlace = (placeDetailsJson) => {
  return {
    type: "addDataIntoBookmark",
    value: placeDetailsJson,
  };
};

export { setBookMarkPlace };
