import React from "react";

import { About } from "./body_components/About";
import Experience from "../components/body_components/Experience";
import Skills from "../components/body_components/Skills";
import Projects from "../components/body_components/Projects";
import { Hobby } from "../components/body_components/Hobby";

class Body extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      Experience: false,
      Skills: false,
      Projects: false,
    };
    this.handleExpandProjects = this.handleExpandProjects.bind(this);
    this.handleExpandSkills = this.handleExpandSkills.bind(this);
    this.handleExpandExperience = this.handleExpandExperience.bind(this);
  }

  handleExpandProjects() {
    this.setState({
      Projects: !this.state.Projects,
    });
  }

  handleExpandSkills() {
    this.setState({
      Skills: !this.state.Skills,
    });
  }

  handleExpandExperience() {
    this.setState({
      Experience: !this.state.Experience,
    });
  }

  render() {
    return (
      <div className="flex flex-col justify-between items-left justify-left w-full mx-auto shadow-cyan-800/20 dark:shadow-cyan-50/20">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hobby />
      </div>
    );
  }
}

export default Body;
