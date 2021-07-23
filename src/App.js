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
      <Users />
    </div>
  );
}

export default App;
