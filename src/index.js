import { Layout } from "@components"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { GistsList } from "./components/Gists"
import { Home } from "./components/Home"
import { Profile } from "./components/Profile"
import { store, persistor } from "./store/store"

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <MuiThemeProvider>
          <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact={true} path="/layout">
              <Layout />
            </Route>
            <Route exact={true} path="/gists">
              <GistsList />
            </Route>
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
)
