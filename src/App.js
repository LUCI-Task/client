import React, { lazy, Suspense, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
//redux
import { useDispatch } from "react-redux";
//API
import { getUsers } from "./state/action/users";
//components
import Navbar from "./components/Navbar";

// lazy load
const HomePage = lazy(() => import("./components/Users"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="flex flex-col w-full h-screen xl:flex-row ">
      <Navbar />
      <Suspense maxDuration={100} fallback={<PuffLoader />}>
        <HomePage />
      </Suspense>
    </div>
  );
};

export default App;
