import initialStatue from "./redux-state";

const reducer = (state = initialStatue, action) => {
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
    default:
      return state;
  }
};

export default reducer;
