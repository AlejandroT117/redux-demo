import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribed } from "../actions";

// const subscription = () => {
//   return {
//     type: "subscription",
//   };
// };
// const subscribed = () => {
//   return {
//     type: "subscribed",
//   };
// };

// //REDUCER
// const changeMsg = (state = "Subscribe to SimpleLearn", action) => {
//   switch (action.type) {
//     case "subscription":
//       state = "Subscribe to SimpleLearn";
//       return state;
//     case "subscription":
//       state = "Thanks for subscribing";
//       return state;
//   }
// };

// let store = createStore(changeMsg);

// store.subscribe(() => console.log(store.getState()))

// store.dispatch(subscription())

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
