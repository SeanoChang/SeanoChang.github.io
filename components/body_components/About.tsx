import React from "react";
import HoveringText from "../general/HoveringText";

export const About: React.FC = () => {
  return (
    <div
      className="flex flex-row justify-center items-center py-24 min-h-screen "
      id="about"
    >
      <div className="flex flex-col justify-left p-2 lg:p-6  w-11/12 sm:w-5/6 2xl:w-3/5 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-900 transition duration-150">
        <div className="font-bold text-3xl lg:text-4xl px-2 lg:px-4 py-4">
          About...
        </div>
        <div className="flex flex-col pb-4">
          <div className="flex flex-row justify-between px-3 lg:px-6 py-4">
            <div className="font-bold">
              <span className="text-2xl lg:text-3xl xl:text-4xl block">
                <HoveringText text="Purdue University" />
              </span>
              <span className="text-sm lg:text-xl xl:text-2xl block">
                <HoveringText text="Elmore Family School of Electrical and Computer Engineering" />
              </span>
            </div>
            <div className="flex flex-col text-xs lg:text-base justify-center">
              <span className="italic">
                <HoveringText text="- West Lafayette, IN" />
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between text-xs px-3 lg:px-6 lg:text-base">
            <span className="text-left">
              <HoveringText text="Bachelor of Science in Computer Engineering" />
            </span>
            <span className="text-right italic">
              <HoveringText text="May 2024" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
