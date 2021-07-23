import {
  fetchUsers,
  createSingleUser,
  updateSingleUser,
  deleteSingleUser,
} from "../../api";

import {
  FETCH_ALL_USERS,
  CREATE_NEW_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../types";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await fetchUsers();
    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    const { data } = await createSingleUser(userData);
    dispatch({ type: CREATE_NEW_USER, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (id, info) => async (dispatch) => {
  try {
    const { data } = await updateSingleUser(id, info);

    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await deleteSingleUser(id);
    dispatch({ type: DELETE_USER, payload: id });
  } catch (err) {
    console.log(err);
  }
};
