import "../styles/index.css"

import React from "react"
import { Link } from "react-router-dom"

export const Home = () => (
  <div className="heading">
    <Link to="/profile">Вашш профиль</Link>
    <Link to="/layout">Ваша переписка</Link>
  </div>
)
