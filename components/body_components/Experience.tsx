import React from 'react';
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

class Experience extends React.Component<{expand: boolean, handleExpand: any}, any> {
    experiences: any = () => {
        return (
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="font-bold text-xl lg:text-3xl py-2 px-3 lg:py-6 lg:px-6">Teaching Assisatant</div>
                    <div className="flex flex-col">
                        <div className="flex flex-rol text-base lg:text-2xl px-4 lg:px-8">
                            <span className="text-left w-1/2 lg:w-3/4">Data Structure and Algorithm</span>
                            <span className="text-right w-1/2 lg:w-1/4 italic">Fall 2022</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xl lg:text-3xl py-2 lg:py-6 px-3 lg:px-6">Surf Shop</div>
                    <div className="flex flex-col">
                        <div className="flex flex-row text-base lg:text-2xl px-4 lg:px-8">
                            <span className="text-left w-1/2 lg:w-3/4">Pirate Surf Coach</span>
                            <span className="text-right w-1/2 lg:w-1/4 italic">May 2021, June 2022</span>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        

    render(){
        return(
            <div className="flex flex-col justify-left shadow-inherit shadow-xl rounded-xl p-2 lg:p-6 transition dark:bg-stone-700 hover:shadow-inherit hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300">
                <div className="font-bold text-2xl lg:text-4xl px-2 lg:px-4 py-4">Work Experiences...</div>
                {this.props.expand? this.experiences(): null}
                <div className="mx-auto cursor-pointer" onClick={this.props.handleExpand}>
                    {this.props.expand ? <BiChevronUp className="motion-safe:animate-bounce text-4xl"/> : <BiChevronDown className="motion-safe:animate-bounce text-4xl"/> }
                </div>
            </div>
        )
    }
}

export default Experience;