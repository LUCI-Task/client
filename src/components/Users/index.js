import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
//redux
import { useSelector } from "react-redux";

//components
import User from "./User";
import Search from "./Search";
import Sorting from "./Sorting";

//helpers
import { compareValues } from "../../HelperFunctions/Helpers";

const Users = () => {
  const users = useSelector((state) => state.users);
  const admin = useSelector((state) => state.auth.authData);

  console.log(admin);
  const [data, SetData] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [order, setOrder] = useState(false);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }
  useEffect(() => {
    SetData([].concat(users));
  }, [users]);

  return (
    <main className="flex flex-col flex-1 bg-gray-100 xl:mx-auto ">
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
      {users && admin !== null ? (
        <>
          <div className="pt-12 mx-10 my-2 overflow-y-auto transition duration-500 ease-in-out">
            {users.length ? (
              data
                .filter((person) => person.first_name.includes(search))
                .sort(compareValues(sortValue, `${order && "desc"}`))
                .map((item) => (
                  <User data-testid="user-data" key={item._id} user={item} />
                ))
            ) : (
              <div className="py-20 text-center">
                <ScaleLoader />
              </div>
            )}
          </div>
        </>
      ) : (
        <h1 className="pt-20 text-3xl text-center">Login to manage users!</h1>
      )}
    </main>
  );
};

export default Users;
