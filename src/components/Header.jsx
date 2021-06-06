import "../styles/index.css";
import React from "react";
import { useSelector } from "react-redux";
import { getState } from "../store/selectors";

export const Header = () => {
  const { name } = useSelector(getState);

  return (
    <div className="heading">
      <h1>{name} это Ваша переписка</h1>
    </div>
  );
};
