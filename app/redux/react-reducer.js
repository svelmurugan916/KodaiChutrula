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
    default:
      return state;
  }
};

export default reducer;
