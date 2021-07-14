import axios from "axios";

const url = "http://localhost:5000";

const API = axios.create({ baseURL: `${url}` });

export const fetchUsers = () => API.get("/users");
export const fetchUser = (id) => API.get(`/users/${id}`);
export const createUser = (newUser) => API.post("/users", newUser);
export const updateUser = (id, info) => API.patch(`/users/${id}`, info);
export const deleteUser = (id) => API.delete(`users/${id}`);
