import { Layout } from "@components"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "./components/Home"
import { Profile } from "./components/Profile"

ReactDOM.render(
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
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
)
