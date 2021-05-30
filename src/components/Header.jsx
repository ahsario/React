import "../styles/index.css"
import React from "react"
import { useSelector } from "react-redux"

export const Header = () => {
  const { name } = useSelector((store) => store)

  return (
    <div className="heading">
      <h1>{name} это Ваша переписка</h1>
    </div>
  )
}
