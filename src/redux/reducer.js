import { combineReducers } from "redux";

const currentUserReducer = (oldState = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload;

    case "LOG_USER_OUT":
      return null;

    default:
      return oldState;
  }
};

const searchTermReducer = (oldState = "", action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_TERM":
      return action.newSearchTerm;

    default:
      return oldState;
  }
};

const artworksListReducer = (oldState = [], action) => {
  switch (action.type) {
    case "FETCHED_ARTWORKS":
      return [...oldState, ...action.artworks];

    case "CLEAR_PAGE":
      return [];

    default:
      return oldState;
  }
};

const artworksPaginationReducer = (oldState = 1, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return oldState + 1;

    case "CLEAR_PAGE":
      return 1;

    default:
      return oldState;
  }
};

const currentArtworkToShowReducer = (oldState = null, action) => {
  switch (action.type) {
    case "FETCH_ARTWORK":
      return action.artwork;

    default:
      return oldState;
  }
};

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  searchTerm: searchTermReducer,
  artworks: artworksListReducer,
  currentArtworksPage: artworksPaginationReducer,
  currentArtwork: currentArtworkToShowReducer
});

export default rootReducer;
