import { useReducer } from "react";
import { CounterAction, CounterState } from "./Counter.types";

const initialState = {
  count: 0,
};

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };

    case "DECREMENT":
      return { count: state.count - action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment 10
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement 10
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};
