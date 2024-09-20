// reducer/PlusMinus.js
const initialState = 0;

const PlusMinus = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default PlusMinus;
