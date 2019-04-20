import React from "react";
import useGlobalHook from "../utils/useGlobalHook";
import * as actions from "../actions";

const initialState = {
  counterValue: 0,
  counterComponents: 1
};

const useGlobal = useGlobalHook(React, initialState, actions);
export default useGlobal;