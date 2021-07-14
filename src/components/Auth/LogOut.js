import React from "react";

//redux
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../state/types";

const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center mt-auto font-extrabold text-black outline-none hover:text-red-400">
      <div className="flex items-center">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path
            d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"
          ></path>
        </svg>
        <button onClick={() => dispatch({ type: LOGOUT })}>
          <span className="ml-2 font-medium capitalize">log out</span>
        </button>
      </div>
    </div>
  );
};

export default LogOut;
