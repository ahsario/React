import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { exampleAction } from "../store/actions";
import { getState } from "../store/selectors";
import { Home } from "./Home";

export const Profile = () => {
  const { showName, name } = useSelector(getState);
  const dispatch = useDispatch();
  const setShowName = useCallback(() => {
    dispatch(exampleAction("Ахсар"));
  }, [dispatch]);

  return (
    <>
      <Home />
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </>
  );
};
