import { LOGIN, LOGOUT } from "../types";

const initialState = {
  authData: JSON.parse(localStorage.getItem("admin")),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("admin", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
