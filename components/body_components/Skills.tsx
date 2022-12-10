import React from 'react';
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";


let skills_list = [
    {
        "skill": "Programming Languages",
        "list": [
            {
                "name": "C/C++",
                "time": "Fluent"
            },
            {
                "name": "Python",
                "time": "Fluent"
            },
            {
                "name": "JavaScript",
                "time": "Fluent"
            },
            {
                "name": "HTML/CSS",
                "time": "Fluent"
            },
            {
                "name": "TypeScript",
                "time": "Intermediate"
            },
            {
                "name": "Java",
                "time": "Intermediate"
            },
            {
                "name": "Solidity",
                "time": "Intermediate"
            },
            {
                "name": "Swift",
                "time": "Intermediate"
            }
        ]    
    },
    {
        "skill": "Frameworks",
        "list": [
            {
                "name": "Node.js",
                "time": "6 months"
            },
            {
                "name": "Express.js",
                "time": "6 months"
            },
            {
                "name": "React.js",
                "time": "3 months"
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
        const skills_list = this.state.skills.map((i: {skill:string, list:{name:string, time:string}[]}, index: number) => {
            return (
                <div className="flex flex-col py-2 lg:py-8 px-3 lg:px-5" key={index}>
                    <div className="font-bold text-base lg:text-2xl" key={i.skill}>{i.skill}</div>
                    <div className="flex flex-col px-3 lg:px-6 py-2 lg:py-6" key={index.toString() + "list"}>
                        {i.list.map((j: {name:string, time:string}, index:number) => {
                            return (
                                <div className="flex flex-row py-4" key={index}>
                                    <span className="text-left text-sm lg:text-xl w-1/2 lg:w-3/4" key={j.name}>{j.name}</span>
                                    <span className="text-right text-xs lg:text-base w-1/2 lg:w-1/4 italic" key={j.time}>{j.time}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        });
        return(
            <div className="flex flex-col justify-left shadow-inherit shadow-xl rounded-xl p-2 lg:p-6 transition dark:bg-stone-700 hover:shadow-inherit hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300">
                <div className="font-bold text-2xl lg:text-4xl px-2 lg:px-4 py-2 md:py-4">Skills...</div>
                {this.props.expand ? skills_list : null}
                <div className="mx-auto cursor-pointer" onClick={this.props.handleExpand}>
                    {this.props.expand ? <BiChevronUp className="motion-safe:animate-bounce text-2xl lg:text-4xl"/> : <BiChevronDown className="motion-safe:animate-bounce text-4xl"/> }
                </div>
            </div>
        )
    }
}

export default Skills;