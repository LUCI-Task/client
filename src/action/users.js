import * as api from "../api";

//action creators
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: "FETCH_ALL_USERS", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userData);
    dispatch({ type: "CREATE_NEW_USERS", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
