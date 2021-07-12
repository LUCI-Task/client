import React from "react";
//redux
import { useSelector } from "react-redux";
//components
import User from "./User";
import Search from "./Search";
import Sorting from "./Sorting";
const Users = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <main className="flex flex-col flex-1 overflow-y-auto transition duration-500 ease-in-out bg-gray-100 dark:bg-gray-700">
      <div className="mx-10 my-2">
        <Search />
        <h2 className="my-4 text-4xl font-semibold dark:text-gray-400">
          User list
        </h2>
        <Sorting />
        {users && users.map((user) => <User user={user} />)}
      </div>
    </main>
  );
};

export default Users;
