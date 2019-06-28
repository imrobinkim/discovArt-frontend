import { combineReducers } from 'redux';

const currentUserReducer = (oldState = null, action) => {
  switch (action.type) {
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
})

export default rootReducer;