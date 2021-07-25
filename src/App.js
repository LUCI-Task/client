import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./state/actions/users";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

function App() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.authData);

  useEffect(() => {
    if (admin === null) {
      return;
    } else {
      dispatch(getUsers());
    }
  }, [admin, dispatch]);

  return (
    <div className="flex flex-col w-full h-screen xl:flex-row ">
      <Navbar />
      {admin !== null ? (
        <Users />
      ) : (
        <div className="w-full h-screen bg-center bg-no-repeat bg-access-cat">
          <h2 className="py-12 text-4xl font-semibold text-center text-gray-400">
            Login to manage users!
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
