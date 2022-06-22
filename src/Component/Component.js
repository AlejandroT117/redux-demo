import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribed } from "../actions";


export const NewComponent = () => {
  const message = useSelector(state => state.message)
  const dispatch = useDispatch()

  return (
    <div className="myComponent">
      <h3>{message}</h3>
      <button type="info" onClick={()=> dispatch(subscribed())}>
        Subscribe
      </button>
    </div>
  );
};
