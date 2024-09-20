import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../action/Counter";
export default function Count() {
  const myState = useSelector((state) => state.PlusMinus);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row gap-5 justify-center text-center items-center ">
      <button
        className="py-3 px-4 w-[6rem] text-white text-4xl"
        onClick={() => dispatch(incNumber())}
      >
        +
      </button>
      <h1> {myState}</h1>
      <button
        onClick={() => dispatch(decNumber())}
        className="py-3 px-4 w-[6rem] text-white text-4xl "
      >
        -
      </button>
    </div>
  );
}
