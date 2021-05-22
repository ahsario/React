import { Layout } from "@components"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
  <MuiThemeProvider>
    <Layout />
  </MuiThemeProvider>,
  document.getElementById("root"),
)
