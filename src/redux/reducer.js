import { combineReducers } from 'redux';

const currentUserReducer = (oldState = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload

    default:
      return oldState
  }
}

const artworksReducer = (oldState = [], action) => {
  switch (action.type) {
    case "FETCHED_INITIAL_ARTWORKS":
      return action.artworks

    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  artworks: artworksReducer,

})

export default rootReducer;