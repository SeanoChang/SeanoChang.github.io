import React from 'react';
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

class Experience extends React.Component<{expand: boolean, handleExpand: any}, any> {
    experiences: any = () => {
        return (
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="font-bold text-3xl py-6 px-4">Teaching Assisatant</div>
                    <div className="flex flex-col">
                        <div className="flex flex-rol text-2xl px-8">
                            <span className="text-left w-3/4">Data Structure and Algorithm</span>
                            <span className="text-right w-1/4 italic">Fall 2022</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-3xl py-6 px-4">Surf Shop</div>
                    <div className="flex flex-col">
                        <div className="flex flex-row text-2xl px-8">
                            <span className="text-left w-3/4">Pirate Surf Coach</span>
                            <span className="text-right w-1/4 italic">May 2021, June 2022</span>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        

    render(){
        return(
            <div className="flex flex-col justify-left shadow-inherit shadow-xl rounded-xl p-6 transition dark:bg-stone-700 hover:shadow-inherit hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300">
                <div className="font-bold text-4xl py-4">Work Experiences...</div>
                {this.props.expand? this.experiences(): null}
                <div className="mx-auto cursor-pointer" onClick={this.props.handleExpand}>
                    {this.props.expand ? <BiChevronUp className="motion-safe:animate-bounce text-4xl"/> : <BiChevronDown className="motion-safe:animate-bounce text-4xl"/> }
                </div>
            </div>
        )
    }
}

export default Experience;