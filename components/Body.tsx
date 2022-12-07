import React from 'react';

import {About} from './body_components/About'
import Experience from '../components/body_components/Experience'
import Skills from '../components/body_components/Skills'
import Projects from '../components/body_components/Projects'
import {Space} from '../components/body_components/Space'
import {Hobby} from '../components/body_components/Hobby'

class Body extends React.Component<any,any> {
    constructor(props: any){
        super(props);
        this.state = {
            Experience: false,
            Skills: false,
            Projects: false,
        }
        this.handleExpandProjects = this.handleExpandProjects.bind(this);
        this.handleExpandSkills = this.handleExpandSkills.bind(this);
        this.handleExpandExperience = this.handleExpandExperience.bind(this);
    }

    handleExpandProjects(){
        this.setState({
            Projects: !this.state.Projects
        })
    }

    handleExpandSkills(){
        this.setState({
            Skills: !this.state.Skills
        })
    }

    handleExpandExperience(){
        this.setState({
            Experience: !this.state.Experience
        })
    }

    render(){
        return (
            <div className="flex flex-col justify-between items-left justify-left w-1/2 mx-auto">
                <Space id="about"/>
                <About/>
                <Space id="skills"/>
                <Skills expand={this.state.Skills} handleExpand={this.handleExpandSkills}/>
                <Space id="projects"/>
                <Projects expand={this.state.Projects} handleExpand={this.handleExpandProjects}/>
                <Space id="experience"/>
                <Experience expand={this.state.Experience} handleExpand={this.handleExpandExperience}/>
                <Space id="hobby"/>
                <Hobby/>
            </div>
        )
    }
}

export default Body;