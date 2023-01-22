import React from "react";
import HoveringText from "../general/HoveringText";

type Project = {
  name: string;
  date: string;
  description: string[];
};

const CppProject: Project[] = [
  {
    name: "Fastest Path Finder",
    date: "April 2022",
    description: [
      "Given the dimesion and the values of each cell in a grid, reconstructed the path for with a graph structure.",
      "This program went through the the grid from top row to bottom row and found the shortest time for each entry to reach the bottom row.",
      "Among all the paths, the program found the path with the shortest time to exit the grid.",
    ],
  },
  {
    name: "Huffman Decoding",
    date: "February 2022",
    description: [
      "Provide the Huffman encoded file, the program decoded the file and rebuilt the Huffman tree.",
      "Decoded the Huffman tree and turn the encoded file into human readable text.",
    ],
  },
  {
    name: "Simple Assembly Compiler",
    date: "November 2022",
    description: [
      "Provided a simple assembly code (within 50 lines), the program parsed the code and generated the corresponding machine code with the help of symbol table, instruction buffer, and string buffer.",
      "The virtual machine in the program read the machine code and executed the code.",
    ],
  },
];

const PythonProject: Project[] = [
  {
    name: "Relationship Between Student Behaviors and Performance",
    date: "April 2022",
    description: [
      "Used KNN clustering to find out the behaviors(attendence, hours of study, etc) that have the most impact on student performance on exams.",
    ],
  },
];

const TypescriptProject: Project[] = [
  {
    name: "Personal Website",
    date: "December 2022",
    description: ["This website is built with Next and Tailwind CSS."],
  },
  {
    name: "Cryptocurrency News API",
    date: "August 2022",
    description: [
      "Utilized express.js, axios.js, and cheerio.js to scrap and filter news for specific cryptocurrencies from crypto news websites. e.g. Coindesk, Newsbtc, cryptopolitan...",
    ],
  },
  {
    name: "Trading Journel Website",
    date: "Juanuary 2023",
    description: [
      "Built a website for recording my trading ideas and mistakes.",
      "Tools used: React.js, Next.js, Tailwind CSS, Framer Motion, Next Auth, Prisma, PostgreSQL, and Vercel.",
      "Upcoming features: comments, likes, and customized price list.",
    ],
  },
];

const ProjectItem = (props: { project: Project }): JSX.Element => {
  // get the descriptions of the project
  const descriptions = props.project.description.map((description, index) => {
    return (
      <li key={index}>
        <span>{description}</span>
      </li>
    );
  });

  return (
    <div className="hover:bg-cyan-100 dark:hover:bg-cyan-900 rounded-lg py-4">
      <div className="flex flex-row justify-between px-8">
        <span className="text-left text-xl md:text-2xl lg:text-3xl font-medium">
          <HoveringText text={props.project.name} />
        </span>
        <span className="text-right text-base md:text-md lg:text-lg italic">
          <HoveringText text={props.project.date} />
        </span>
      </div>
      <ul className="list-disc px-14 py-2">{descriptions}</ul>
    </div>
  );
};

const CppSection = (): JSX.Element => {
  const project_list = CppProject.map((project: Project) => {
    return <ProjectItem project={project} key={project.name} />;
  });

  return (
    <div className="flex flex-col justify-center">
      <span className="text-2xl md:text-3xl lg:text-4xl font-semibold p-3">
        <HoveringText text="C/C++" />
      </span>
      <div>{project_list}</div>
    </div>
  );
};

const PythonSection = (): JSX.Element => {
  const project_list = PythonProject.map((project: Project) => {
    return <ProjectItem project={project} key={project.name} />;
  });

  return (
    <div className="flex flex-col justify-center">
      <span className="text-2xl md:text-3xl lg:text-4xl font-semibold p-3">
        <HoveringText text="Python" />
      </span>
      <div>{project_list}</div>{" "}
    </div>
  );
};

const TypescriptSection = (): JSX.Element => {
  const project_list = TypescriptProject.map((project: Project) => {
    return <ProjectItem project={project} key={project.name} />;
  });

  return (
    <div className="flex flex-col justify-center">
      <span className="text-2xl md:text-3xl lg:text-4xl font-semibold p-3">
        <HoveringText text="Typescript" />
      </span>
      <div>{project_list}</div>
    </div>
  );
};

const Projects = (): JSX.Element => {
  return (
    <section
      className="flex flex-row justify-center items-center py-24"
      id="projects"
    >
      <div className="flex flex-col justify-left  w-11/12 sm:w-5/6 2xl:w-3/5 p-2 lg:p-6 rounded-lg">
        <div className="font-bold text-2xl lg:text-4xl px-2 lg:px-4 py-2 md:py-4">
          Projects...
        </div>
        <CppSection />
        <PythonSection />
        <TypescriptSection />
      </div>
    </section>
  );
};

export default Projects;
