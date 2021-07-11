/* eslint-disable import/no-anonymous-default-export */
export default (users = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return action.payload;
    case "CREATE_NEW_USER":
      return [...users, action.payload];
    default:
      return users;
  }
};
