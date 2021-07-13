/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_ALL_USERS,
  CREATE_NEW_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../types";

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    case CREATE_NEW_USER:
      return [...users, action.payload];
    case UPDATE_USER:
      return users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    case DELETE_USER:
      return users.filter((user) => user._id !== action.payload);
    default:
      return users;
  }
};
