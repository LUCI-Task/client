import * as api from "../../api";

import {
  FETCH_ALL_USERS,
  CREATE_NEW_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../types";

//action creators
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userData);
    dispatch({ type: CREATE_NEW_USER, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (id, info) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, info);

    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: DELETE_USER, payload: id });
  } catch (err) {
    console.log(err);
  }
};
