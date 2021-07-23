import React from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../state/types";

//components
import Button from "../Button";

const LogOut = () => {
  const dispatch = useDispatch();
  const svg = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path
        d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
    				2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
    				0 012-2h9z"
      ></path>
    </svg>
  );

  return (
    <div className="flex items-center justify-center mt-auto">
      <Button
        action={() => dispatch({ type: LOGOUT })}
        styles={`border-red-500 hover:border-red-600 hover:bg-red-500`}
        svg={svg}
        text="log out"
      />
    </div>
  );
};

export default LogOut;
