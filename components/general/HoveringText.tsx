import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const HoveringText = (props: { text: string }): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  // break the text into words and each word into alphabets when on hover the alphabets will scale up
  const text = props.text.split(" ");
  const textElements = text.map((word, index) => {
    const wordElements = word.split("").map((letter, index) => {
      return (
        <div
          className="hover:scale-125 hover:-translate-y-1 transition duration-[50ms]"
          key={index.toString()}
        >
          {letter}
        </div>
      );
    });
    return (
      <div
        className="flex flex-row p-1"
        key={index.toString()}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
        }}
      >
        {wordElements}
      </div>
    );
  });

  return (
    <div className="flex flex-row flex-wrap" ref={ref}>
      {textElements}
    </div>
  );
};

export default HoveringText;
