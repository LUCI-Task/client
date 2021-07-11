import axios from "axios";

const url = "http://localhost:3333/users";

export const fetchUsers = () => axios.get(url);

export const createUser = (newUser) => axios.post(url, newUser);
