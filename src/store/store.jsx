import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // localStorage
import thunk from "redux-thunk"
import { gistsReducer } from "./gists"
import { messageFieldReducer } from "./reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  messageFieldReducer,
  gistsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
)

export const persistor = persistStore(store)
