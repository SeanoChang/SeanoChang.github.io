import React from "react";
import { useInView } from "framer-motion";
import HoveringText from "../general/HoveringText";

type Skill = {
  skill: string;
  fluency: number;
};

const Languages: Skill[] = [
  {
    skill: "C/C++",
    fluency: 80,
  },
  {
    skill: "Python",
    fluency: 80,
  },
  {
    skill: "JavaScript",
    fluency: 90,
  },
  {
    skill: "HTML/CSS",
    fluency: 70,
  },
  {
    skill: "TypeScript",
    fluency: 70,
  },
  {
    skill: "Java",
    fluency: 50,
  },
  {
    skill: "Solidity",
    fluency: 30,
  },
  {
    skill: "Swift",
    fluency: 40,
  },
  {
    skill: "Rust",
    fluency: 20,
  },
];

const Frameworks: Skill[] = [
  {
    skill: "React.js",
    fluency: 70,
  },
  {
    skill: "Prisma",
    fluency: 70,
  },
  {
    skill: "Next.js",
    fluency: 70,
  },
  {
    skill: "Trpc",
    fluency: 50,
  },
    {
    skill: "Node.js",
    fluency: 50,
  },
  {
    skill: "Express.js",
    fluency: 50,
  },
  {
    skill: "Tailwind CSS",
    fluency: 50,
  },
  {
    skill: "Framer Motion",
    fluency: 50,
  },
  {
    skill: "Astro",
    fluency: 40,
  },
  {
    skill: "Svelte",
    fluency: 10,
  },
];

const SkillCard = (props: { skill: Skill }): JSX.Element => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div className="flex flex-row justify-between items-center w-full h-24 hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-red-400 dark:hover:text-[#ff9f46] rounded-lg pr-10">
      <div className="text-base sm:text-lg md:text-xl lg:text-2xl px-2 lg:px-4 py-2 m-8">
        <HoveringText text={props.skill.skill} />
      </div>
      <div
        className="bg-[#c1c1c1] dark:bg-[#9c9c9c] w-3/4 md:w-1/2 rounded my-4"
        ref={ref}
      >
        <div
          style={{
            width: isInView ? `${props.skill.fluency}%` : "0%",
            transition: "width 1s ease-in-out",
          }}
          className="bg-gradient-to-r from-[#d6ab36] to-[#ffdc89] dark:group-hover:bg-[#4287fd] h-2 rounded"
        />
      </div>
    </div>
  );
};

const Skills = (): JSX.Element => {
  const language_list = Languages.map((language: Skill) => {
    return (
      <div key={language.skill}>
        <SkillCard skill={language} />
      </div>
    );
  });

  const framework_list = Frameworks.map((framework: Skill) => {
    return (
      <div key={framework.skill}>
        <SkillCard skill={framework} />
      </div>
    );
  });

  return (
    <div
      className="flex flex-row justify-center items-center py-24"
      id="skills"
    >
      <div className="flex flex-col justify-left w-11/12 sm:w-5/6 2xl:w-3/5 p-2 lg:p-6 dark:text-stone-300">
        <div className="font-bold text-2xl lg:text-4xl px-2 lg:px-4 py-2 md:py-4">
          Skills...
        </div>
        <div className="flex flex-col">
          <span className="m-8 text-xl lg:text-3xl font-semibold">
            Languages
          </span>
          <div className="flex flex-col">{language_list}</div>
          <span className="m-8 text-xl lg:text-3xl font-semibold">
            Framework
          </span>
          <div className="flex flex-col">{framework_list}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
