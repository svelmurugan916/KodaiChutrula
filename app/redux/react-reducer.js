import initialStatue from "./redux-state";

const reducer = (state = initialStatue, action) => {
  console.log("Calling action..... - ", action.type);
  switch (action.type) {
    case "addDataIntoBookmark":
      return {
        ...state,
        bookMarkedPlaces: [...state.bookMarkedPlaces, action.value],
        bookMarkedPlaceIdList: [
          ...state.bookMarkedPlaceIdList,
          action.value.id,
        ],
      };
    case "addPlaceForCategory":
      let categoryPlaceDetails = state.categoryPlaceDetails;
      let placeDetails = state.categoryPlaceDetails[action.value.categoryId];
      if (placeDetails === undefined) {
        placeDetails = [];
      }
      categoryPlaceDetails[action.value.categoryId] = [
        ...placeDetails,
        ...action.value.placeList,
      ];
      console.log(
        "categoryPlaceDetails -- ",
        Object.keys(categoryPlaceDetails)
      );
      return {
        ...state,
        categoryPlaceDetails: categoryPlaceDetails,
      };
    case "addImagesForPlace":
      console.log("action value -- ", action.value);
      return {
        ...state,
        placeImageDataJson: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
