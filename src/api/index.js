import axios from "axios";

const url = "http://localhost:5000/users";

export const fetchUsers = () => axios.get(url);
export const fetchUser = (id) => axios.get(`${url}/${id}`);
export const createUser = (newUser) => axios.post(url, newUser);
export const updateUser = (id, info) => axios.patch(`${url}/${id}`, info);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);

//other
export const queryBy = (query) => axios.get(url);
