import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, sign_in } from "../actions";

 export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  const styleLogged = {
    fontSize: 18,
    color: "blue",
  };

  const styleNotLogged ={
    color: "red"
  }

  return (
    <>
      <h1>Contador</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h4 style={logged ? styleLogged: styleNotLogged}>Logged: {logged}</h4>
      <button onClick={() => dispatch(sign_in())}>Sign in</button>
    </>
  );
};
