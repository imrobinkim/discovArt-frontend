import { combineReducers } from 'redux';

const currentUserReducer = (oldState = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload

    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
})

export default rootReducer;