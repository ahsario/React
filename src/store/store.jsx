import { createStore } from "redux"
import { messageFieldReducer } from "./reducer"

export const store = createStore(
  messageFieldReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
