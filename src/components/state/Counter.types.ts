export type CounterState = {
  count: number;
};

type UpdateActions = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};

type ResetAction = {
  type: "RESET";
};

// ? discriminated unions
export type CounterAction = UpdateActions | ResetAction;
