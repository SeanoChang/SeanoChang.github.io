import React from 'react';
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

let projects_so_far = [
        {  
            "language": "C/C++",
            "projects": [
                {
                    "name": "Fastest Path Finder",
                    "date": "April 2022",
                    "description": [
                        "Given the dimesion and the values of each cell in a grid, reconstructed the path for with a graph structure.",
                        "This program went through the the grid from top row to bottom row and found the shortest time for each entry to reach the bottom row.",
                        "Among all the paths, the program found the path with the shortest time to exit the grid."
                    ]
                },
                {
                    "name": "Huffman Decoding",
                    "date": "February 2022",
                    "description": ["Provide the Huffman encoded file, the program decoded the file and rebuilt the Huffman tree.",
                        "Decoded the Huffman tree and turn the encoded file into human readable text."
                    ]
                },
                {
                    "name": "Simple Assembly Compiler",
                    "date": "November 2022",
                    "description": [ "Provided a simple assembly code (within 50 lines), the program parsed the code and generated the corresponding machine code with the help of symbol table, instruction buffer, and string buffer.",
                        "The virtual machine in the program read the machine code and executed the code."
                    ]
                }
            ]
        },
        {
            "language": "Python",
            "projects": [
                { 
                    "name": "Relationship Between Student Behaviors and Performance",
                    "date": "April 2022",
                    "description": [
                        "Used KNN clustering to find out the behaviors(attendence, hours of study, etc) that have the most impact on student performance on exams."
                    ]
                }
            ]
        },
        {
            "language": "JavaScript",
            "projects": [
                {
                    "name": "Personal Website",
                    "date": "December 2022",
                    "description": [ "This website is built with Next and Tailwind CSS."]
                },
                {
                    "name": "Cryptocurrency News API",
                    "date": "August 2022",
                    "description": [ "Utilized express.js, axios.js, and cheerio.js to scrap and filter news for specific cryptocurrencies from crypto news websites. e.g. Coindesk, Newsbtc, cryptopolitan..."]
                }
            ]
        }
]


class Projects extends React.Component<{expand: boolean, handleExpand: any}, any> {
    constructor (props: any) {
        super(props);
        this.state = {
            projects: projects_so_far
        }
    }

    render() {
        const projects_list = this.state.projects.map((i: any, key1: number) => {
            return (
                <div className="flex flex-col py-8 px-4" key={key1.toString()}>
                    <div className="font-bold text-3xl" key={key1.toString()}>{i.language}</div>
                    {i.projects.map((j: any, key2:number) => {
                        return(
                            <div className="flex flex-col pb-4 py-4 px-4" key={key2.toString()}>
                                <div className="flex flex-row text-2xl" key={key2.toString()}>
                                    <span className="w-3/4">{j.name}</span>
                                    <span className="text-right w-1/4 italic">{j.date}</span>
                                </div>
                                <ul className="list-disc p-6">
                                    {j.description.map((k: string) => {
                                        return <li className="text-xl w-3/4" key={k}>{k}</li>
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            )
        });

        return(
            <div className="flex flex-col justify-left shadow-inherit shadow-xl rounded-xl p-6 transition dark:bg-stone-700 hover:shadow-inherit hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300">
                <div className="font-bold text-4xl pb-8">Projects...</div>
                {this.props.expand ? projects_list : null}
                <div className="mx-auto cursor-pointer" onClick={this.props.handleExpand}>
                    {this.props.expand ? <BiChevronUp className="motion-safe:animate-bounce text-4xl"/> : <BiChevronDown className="motion-safe:animate-bounce text-4xl"/> }
                </div>
            </div>
        )
    }
}

export default Projects