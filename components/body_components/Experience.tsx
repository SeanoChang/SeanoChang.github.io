import React from "react";
import HoveringText from "../general/HoveringText";

const Experiences = (): JSX.Element => {
  const experiences: JSX.Element = (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="font-bold text-xl lg:text-3xl py-2 px-3 lg:py-6 lg:px-6">
          <HoveringText text="Teaching Assisatant" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-rol text-base lg:text-xl px-4 lg:px-8">
            <span className="text-left w-1/2 lg:w-3/4">
              <HoveringText text="Data Structure and Algorithm" />
            </span>
            <span className="text-right w-1/2 lg:w-1/4 italic">
              <HoveringText text="Fall 2022, Spring 2023" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-xl lg:text-3xl py-2 lg:py-6 px-3 lg:px-6">
          <HoveringText text="Surf Shop" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row text-base lg:text-xl px-4 lg:px-8">
            <span className="text-left w-1/2 lg:w-3/4">
              <HoveringText text="Pirate Surf Coach" />
            </span>
            <span className="text-right w-1/2 lg:w-1/4 italic">
              <HoveringText text="May 2021, June 2022" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-row justify-center items-center py-24 min-h-[50vh]">
      <div className="flex flex-col justify-left rounded-xl p-2 lg:p-6 transitionduration-150 w-11/12 sm:w-5/6 2xl:w-3/5 dark:text-stone-300">
        <div className="font-bold text-2xl lg:text-4xl px-2 lg:px-4 py-4">
          Work Experiences...
        </div>
        {experiences}
      </div>
    </div>
  );
};

export default Experiences;
