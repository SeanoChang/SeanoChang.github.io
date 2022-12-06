import React from 'react';
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";


let skills_list = [
    {
        "skill": "Programming Languages",
        "list": [
            {
                "name": "C/C++",
                "time": "2 years"
            },
            {
                "name": "Python",
                "time": "1 year"
            },
            {
                "name": "JavaScript",
                "time": "1 year"
            },
            {
                "name": "HTML/CSS",
                "time": "1 year"
            }
        ]    
    },
    {
        "skill": "Frameworks",
        "list": [
            {
                "name": "React.js",
                "time": "6 months"
            },
            {
                "name": "Node.js",
                "time": "6 months"
            },
            {
                "name": "Express.js",
                "time": "6 months"
            },
            {  
                "name": "Next.js",
                "time": "2 months"
            },
            {
                "name": "Tailwind CSS",
                "time": "1 month"
            }
        ]
    }
]

class Skills extends React.Component<{expand: boolean, handleExpand: any}, any> {
    constructor(props: any){
        super(props);
        this.state = {
            skills: skills_list
        }
    }

    render(){
        const skills_list = this.state.skills.map((i: any) => {
            return (
                <div className="flex flex-col py-8 px-4">
                    <div className="font-bold text-2xl">{i.skill}</div>
                    <div className="flex flex-col text-xl px-4 py-6">
                        {i.list.map((j: any, key:number) => {
                            return (
                                <div className="flex flex-row text-xl py-4" key={key}>
                                    <span className="text-left w-3/4">{j.name}</span>
                                    <span className="text-right w-1/4 italic">{j.time}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        });
        return(
            <div id="skills" className="flex flex-col justify-left shadow-xl rounded-xl p-6 transition hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300">
                <div className="font-bold text-4xl pb-8">Skills...</div>
                {this.props.expand ? skills_list : null}
                <div className="mx-auto cursor-pointer" onClick={this.props.handleExpand}>
                    {this.props.expand ? <BiChevronUp className="motion-safe:animate-bounce text-4xl"/> : <BiChevronDown className="motion-safe:animate-bounce text-4xl"/> }
                </div>
            </div>
        )
    }
}

export default Skills;