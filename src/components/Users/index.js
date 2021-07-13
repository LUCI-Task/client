import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
//redux
import { useSelector } from "react-redux";

//components
import User from "./User";
import Search from "./Search";
import Sorting from "./Sorting";

const Users = () => {
  const [data, SetData] = useState([]);
  const users = useSelector((state) => state.users);
  const [sortValue, setSortValue] = useState("");
  const [order, setOrder] = useState(false);
  const [search, setSearch] = useState("");

  function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }
  function handleChange(e) {
    setSearch(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }

  useEffect(() => {
    SetData([].concat(users));
  }, [users]);

  return (
    <>
      <main className="flex flex-col flex-1 mx-auto bg-gray-100 ">
        <div className="w-full pb-4 mx-auto px-9 ">
          <Search handleChange={handleChange} search={search} />
          <h2 className="py-6 text-4xl font-semibold text-center text-gray-400">
            User Management Dashboard
          </h2>
          <Sorting
            setOrder={setOrder}
            order={order}
            setSortValue={setSortValue}
            sortValue={sortValue}
          />
        </div>
        <div className="mx-10 my-2 overflow-y-auto transition duration-500 ease-in-out ">
          {users.length ? (
            data
              .filter((person) => person.first_name.includes(search))
              .sort(compareValues(sortValue, `${order && "desc"}`))
              .map((item) => <User key={item._id} user={item} />)
          ) : (
            <div className="py-20 text-center">
              <ScaleLoader />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Users;
