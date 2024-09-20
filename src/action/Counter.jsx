// actions/Counter.js
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const incNumber = () => ({
  type: INCREMENT,
});

export const decNumber = () => ({
  type: DECREMENT,
});
