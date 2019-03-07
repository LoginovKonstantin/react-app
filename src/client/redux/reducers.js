import { combineReducers } from 'redux';
import { ReduxActionType } from '../configs/enums';


function mainReducer(state = { value: 0, lang: null }, action) {
  switch (action.type) {
    case ReduxActionType.SETUP_LANGUAGE:
      return Object.assign({}, state, {
        lang: action.payload
      })
    // case ADD_TODO:
    //   return Object.assign({}, state, {
    //     todos: [
    //       ...state.todos,
    //       {
    //         text: action.text,
    //         completed: false
    //       }
    //     ]
    //   })
    default:
      return state
  }
}

export default mainReducer;