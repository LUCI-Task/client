import React, { useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
//API
import { getUsers } from "./action/users";
//components
import Users from "./components/Users";
// import Form from "./components/Form/Form";
import Navbar from "./components/Navbar";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Navbar />
      <Users />
    </div>
  );
};

export default App;
