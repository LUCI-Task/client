import axios from "axios";

const url = process.env.REACT_APP_MONGODB_URL;

const API = axios.create({ baseURL: `${url}` });

export const fetchUsers = () => API.get("/users");
export const fetchUser = (id) => API.get(`/users/${id}`);
export const createUser = (newUser) => API.post("/users", newUser);
export const updateUser = (id, info) => API.patch(`/users/${id}`, info);
export const deleteUser = (id) => API.delete(`users/${id}`);
