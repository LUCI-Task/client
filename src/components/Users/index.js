import React, { useEffect, useState, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";
import LazyLoadPlaceholder from "./Placeholder";
import Sorting from "./Sorting";
import { compareValues } from "../../HelperFunctions/Helpers";

export default function Users() {
  const users = useSelector((state) => state.users);
  const admin = useSelector((state) => state.auth.authData);

  const [data, SetData] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [order, setOrder] = useState(false);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }

  const UserList = lazy(() => import("./User"));

  useEffect(() => {
    SetData([].concat(users));
  }, [users]);

  return (
    <main className="flex flex-col flex-1 bg-gray-100 xl:mx-auto ">
      <div className="w-full pb-4 mx-auto px-9"></div>
      {admin !== null ? (
        <>
          <h2 className="py-12 text-4xl font-semibold text-center text-gray-400">
            User Management Dashboard
          </h2>
          <Sorting
            handleChange={handleChange}
            search={search}
            setOrder={setOrder}
            order={order}
            setSortValue={setSortValue}
            sortValue={sortValue}
          />

          <div className="h-screen pt-2 mx-10 my-2 overflow-y-auto transition duration-500 ease-in-out ">
            {data
              .filter((person) => person.first_name.includes(search))
              .sort(compareValues(sortValue, `${order && "desc"}`))
              .map((item) => (
                <Suspense fallback={<LazyLoadPlaceholder />}>
                  <UserList
                    data-testid="user-data"
                    key={item._id}
                    user={item}
                  />
                </Suspense>
              ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="py-12 text-4xl font-semibold text-center text-gray-400">
            Login to manage users!
          </h2>
          <div className="w-full h-screen bg-center bg-no-repeat bg-access-cat"></div>
        </>
      )}
    </main>
  );
}
