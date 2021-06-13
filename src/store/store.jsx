import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { gistsReducer } from "./gists"
import { messageFieldReducer } from "./reducer"

export const store = createStore(
  combineReducers({
    messageFieldReducer,
    gistsReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : () => {},
  ),
)
