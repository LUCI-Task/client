import React from "react";
import classNames from "classnames";
import ScaleLoader from "react-spinners/ScaleLoader";
//redux
import { useSelector } from "react-redux";

const Sorting = ({ sortValue, setSortValue, setOrder, order }) => {
  const state = useSelector((state) => state.users);

  const counter = (arr, keyword) => {
    const res = {};
    arr.forEach((obj) => {
      const key = `${obj.key}${obj[`${keyword}`]}`;
      if (!res[key]) {
        res[key] = { ...obj, count: 0 };
      }
      res[key].count += 1;
    });
    return Object.values(res);
  };

  const leftButtons = ["name", "email"];
  const rightButtons = ["project", "role", "status"];

  const SortGuideTxt = (t) => {
    switch (t) {
      case "first_name":
        return "Name";
      default:
        return t;
    }
  };

  const leftSort = (t) => {
    switch (t) {
      case "name":
        return "first_name";
      default:
        return t;
    }
  };

  return (
    <>
      {state.length ? (
        <div>
          <div className="flex items-center justify-between pb-2 text-gray-600 border-b dark:text-gray-400 dark:border-gray-600">
            <div className="text-gray-500">
              <span>
                users-
                <span className="mr-2 text-blue-600 text-md">
                  {counter(state, "first_name").length}
                </span>
              </span>
              <span>
                projects-
                <span className="mr-2 text-blue-600 text-md">
                  {counter(state, "project").length}
                </span>
              </span>
              <span>
                roles-
                <span className="mr-2 text-blue-600 text-md">
                  {counter(state, "role").length}
                </span>
              </span>
            </div>
          </div>

          <div className="flex justify-between mt-6 text-gray-400 dark:text-gray-400">
            <div className="flex justify-around w-64 ml-12 ">
              {leftButtons.map((leftText) => {
                const outputText = leftSort(leftText);
                return (
                  <button
                    className="font-bold capitalize outline-none focus:text-blue-600 hover:underline"
                    onClick={() => setSortValue(outputText)}
                  >
                    {leftText}
                  </button>
                );
              })}
            </div>

            <div
              className={classNames(
                "w-20 px-5 text-center text-blue-600 shadow-sm opacity-0",
                {
                  "opacity-100": sortValue.length !== 0,
                }
              )}
            >
              <button
                onClick={() => setOrder(!order)}
                className="m-1 shadow-lg outline-none"
              >
                <svg
                  className="w-8 h-8 text-blue-600 fill-current "
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                  ></path>
                </svg>
              </button>
              <p className="text-sm capitalize opacity-70">
                {SortGuideTxt(sortValue)}
              </p>
            </div>

            <div className="flex justify-end w-6/12 space-x-12 capitalize pr-44 ">
              {rightButtons.map((btn) => {
                // const text = txt(btn);
                return (
                  <div className="flex w-20 ">
                    <button
                      onClick={() => setSortValue(btn)}
                      className="w-10 font-bold capitalize outline-none focus:text-blue-600 hover:underline"
                    >
                      {btn}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center ">
          <ScaleLoader />
        </div>
      )}
    </>
  );
};

export default Sorting;
