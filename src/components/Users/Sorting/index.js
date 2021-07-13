import React from "react";
import { useSelector } from "react-redux";

const Sorting = ({ setSortValue, setOrder, order }) => {
  const state = useSelector((state) => state.users);

  // TODO:
  // console.log(state);

  // const countHelper = (arr, prop) =>
  //   arr.reduce(
  //     (prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev),
  //     {}
  //   );
  // const occ = countHelper(state,)
  // const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

  // const projectCount = Object.values(countHelper(state, "project"));

  // const projectAdd = projectCount.reduce((r, c) => r + c);
  // const roleCount = Object.values(countHelper(state, "role"));
  // const projectAdd = projectCount.reduce((r, c) => r + c);
  // console.log(projectAdd);
  // console.log(countOccurrences(state, "role"));
  // const indices = (arr, value) => arr.map((v, i) => v === value ? i : false).filter(Boolean);

  const leftButtons = ["name", "email"];
  const rightButtons = ["project", "role", "status", "createdAt"];

  const txt = (t) => {
    switch (t) {
      case "createdAt":
        return "Date";
      default:
        return t;
    }
  };
  return (
    <>
      <div className="flex items-center justify-between pb-2 text-gray-600 border-b dark:text-gray-400 dark:border-gray-600">
        <div className="text-gray-500">
          <span>
            users-
            <span className="mr-2 text-blue-600 text-md">{state.length}</span>
          </span>
          <span>
            projects-
            <span className="mr-2 text-blue-600 text-md">1</span>
          </span>
          <span>
            roles-
            <span className="mr-2 text-blue-600 text-md">1</span>
          </span>
        </div>

        <div className="text-gray-500">
          <span className="capitalize">
            project-
            <span className="mr-2 text-blue-600 text-md ">all</span>
          </span>
          <span className="ml-12 capitalize">
            date added-
            <span className="mr-2 text-blue-600 text-md ">all time</span>
          </span>
          <span className="ml-12 capitalize">
            role-
            <span className="mr-2 text-blue-600 text-md ">all</span>
          </span>
        </div>
      </div>

      <div className="flex justify-between mt-6 text-gray-400 dark:text-gray-400">
        <div className="flex justify-around w-64 ml-12 ">
          {leftButtons.map((leftText) => (
            <button
              className="font-bold capitalize outline-none focus:text-blue-600 hover:underline"
              onClick={() => setSortValue(leftText)}
            >
              {leftText}
            </button>
          ))}
        </div>

        <div className="w-20 px-5 ">
          <button onClick={() => setOrder(!order)} className="outline-none ">
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
        </div>
        <div className="flex justify-end w-6/12 pr-12 space-x-12 capitalize ">
          {rightButtons.map((btn) => {
            const text = txt(btn);
            return (
              <div className="flex w-20 ">
                <button
                  onClick={() => setSortValue(text)}
                  className="w-10 font-bold capitalize outline-none focus:text-blue-600 hover:underline"
                >
                  {text}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sorting;
