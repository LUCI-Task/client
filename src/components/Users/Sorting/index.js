import React from "react";

const Sorting = () => {
  const upperStyles = "text-blue-600 text-md mr-2";
  const svgStyles = "w-5 h-5 ml-1 text-blue-600 fill-current";
  return (
    <>
      {/* <!-- Upper sorting --> */}
      <div className="flex items-center justify-between pb-2 text-gray-600 border-b dark:text-gray-400 dark:border-gray-600">
        {/* <!-- Header --> */}

        <div>
          <span>
            users-
            <span className={upperStyles}>431</span>
          </span>
          <span>
            projects-
            <span className={upperStyles}>22</span>
          </span>
          <span>
            roles-
            <span className={upperStyles}>33</span>
          </span>
        </div>

        <div>
          <span className="capitalize">
            project-
            <span className={upperStyles}>all</span>
          </span>
          <span className="ml-12 capitalize">
            date added-
            <span className={upperStyles}>all time</span>
          </span>
          <span className="ml-12 capitalize">
            role-
            <span className={upperStyles}>all</span>
          </span>
        </div>
      </div>

      {/* <!-- Bottom sorting --> */}
      <div className="flex justify-between mt-6 text-gray-600 dark:text-gray-400">
        {/* <!-- Left side --> */}
        <div className="flex justify-center space-x-12 capitalize w-96">
          <span className="flex items-center ">
            name
            <svg className={svgStyles} viewBox="0 0 24 24">
              <path
                d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
              ></path>
            </svg>
          </span>
          <span className="flex items-center ">
            Email
            <svg className={svgStyles} viewBox="0 0 24 24">
              <path
                d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
              ></path>
            </svg>
          </span>
        </div>

        <div className="flex mr-2 capitalize">
          {/* <!-- Right side --> */}

          <span className="flex items-center pr-1 mr-16">
            project
            <svg className={svgStyles} viewBox="0 0 24 24">
              <path
                d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
              ></path>
            </svg>
          </span>

          <span className="flex items-center pr-2 mr-16">
            role
            <svg className={svgStyles} viewBox="0 0 24 24">
              <path
                d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
              ></path>
            </svg>
          </span>

          <span className="flex items-center mr-12">
            status
            <svg className={svgStyles} viewBox="0 0 24 24">
              <path
                d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
              ></path>
            </svg>
          </span>
          <span className="flex items-center mr-16">
            date
            <svg className={svgStyles} viewBox="0 0 24 24">
              <path
                d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Sorting;
