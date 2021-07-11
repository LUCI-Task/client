import axios from "axios";

const url = "http://localhost:3333/users";

export const fetchUsers = () => axios.get(url);
