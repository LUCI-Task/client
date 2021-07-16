import React from "react";
import classNames from "classnames";

//redux
import { useSelector } from "react-redux";

//helper funcs
import {
  counter,
  SortGuideTxt,
  leftSort,
} from "../../../HelperFunctions/Helpers";

const Sorting = ({ sortValue, setSortValue, setOrder, order }) => {
  const state = useSelector((state) => state.users);

  const leftButtons = ["name", "email"];
  const rightButtons = ["project", "role", "status"];

  return (
    <>
      {state.length ? (
        <div>
          <div className="flex items-center justify-between pb-2 text-gray-600 border-b ">
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

          <div className="flex justify-between mt-6 text-gray-400 ">
            <div className="flex flex-col justify-around lg:flex-row w-28 md:w-64 md:ml-12 ">
              {leftButtons.map((leftText) => {
                const outputText = leftSort(leftText);
                return (
                  <button
                    key={leftText}
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
                " w-20 px-5 text-center text-blue-600 opacity-0 ",
                {
                  "opacity-100": sortValue.length !== 0,
                }
              )}
            >
              <button
                onClick={() => setOrder(!order)}
                className="m-1 text-3xl outline-none"
              >
                {order ? (
                  <>
                    <i class="fas fa-chevron-down"></i>
                  </>
                ) : (
                  <>
                    <i class="fas fa-chevron-up"></i>
                  </>
                )}
              </button>
              <p className="text-xs capitalize opacity-70">
                {SortGuideTxt(sortValue)}
              </p>
            </div>

            <div className="flex flex-col justify-end w-3/12 pr-2 capitalize lg:space-x-12 lg:flex-row lg:w-6/12 md:pr-44">
              {rightButtons.map((btn) => {
                return (
                  <div className="flex w-20 " key={btn}>
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
      ) : null}
    </>
  );
};

export default Sorting;
