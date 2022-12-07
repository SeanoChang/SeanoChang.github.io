import React from "react";
import {RiCodeBoxLine,RiLineChartLine} from "react-icons/ri";
import {MdSurfing,MdHiking} from "react-icons/md";
import {FaMotorcycle} from "react-icons/fa";
import {GiCook} from "react-icons/gi";
import Link from "next/link";

const hobby_list: {"name":string, "icon": any}[] = [
    {
        "name": "Coding",
        "icon":  <RiCodeBoxLine />,
    },
    {
        "name": "Surfing",
        "icon": <MdSurfing />
    },
    {
        "name": "Motorcycle",
        "icon": <FaMotorcycle />
    },
    {
        "name": "Trading",
        "icon": <RiLineChartLine />
    },
    {
        "name": "Traveling",
        "icon": <MdHiking />
    },
    {
        "name": "Cooking",
        "icon": <GiCook />
    }
]

export const Hobby = () : JSX.Element => {
    // list of hobbies with icons
    const hobbies: JSX.Element[] = hobby_list.map((hobby: {"name":string, "icon":any}, key: number) => {
        if(hobby.name == "Surfing"){
            return (
                <div className="flex flex-row justify-center py-4" key={key.toString()}>
                    <Link href="/surfing/surfing_page" className="text-3xl pr-2 group flex flex-row justify-center">
                        <span className="group-hover:text-[#ff7600]">{hobby.icon}</span>
                        <span className="text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#420355] group-hover:via-[#CD113B] group-hover:to-[#FF7600]">{hobby.name}</span>
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="flex flex-row justify-center py-4" key={key.toString()}>
                    <span className="text-3xl pr-2 ">{hobby.icon}</span>
                    <span className="text-2xl">{hobby.name}</span>
                </div>
            )
        }
    })

    return(
        <div className="flex flex-col justify-left items-center shadow-inherit shadow-xl rounded-xl p-6 transition dark:bg-stone-700 hover:shadow-inherit hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300">
            <div className="font-bold text-4xl py-6 w-full">
                <span className="text-4xl">Love...</span>
            </div>
            <div className="grid grid-flow-col grid-cols-2 grid-rows-3 text-xl px-4 py-4 w-full">{hobbies}</div>
        </div>
    )

}