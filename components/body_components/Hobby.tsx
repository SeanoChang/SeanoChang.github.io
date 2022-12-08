import React from "react";
import {RiCodeBoxLine,RiLineChartLine} from "react-icons/ri";
import {MdSurfing,MdHiking} from "react-icons/md";
import {FaMotorcycle} from "react-icons/fa";
import {GiCampCookingPot} from "react-icons/gi";
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
        "icon": <GiCampCookingPot />
    }
]

export const Hobby = () : JSX.Element => {
    // list of hobbies with icons
    const hobbies: JSX.Element[] = hobby_list.map((hobby: {"name":string, "icon":any}, key: number) => {
        if(hobby.name == "Surfing"){
            return (
                <div className="flex flex-row justify-center py-4" key={key.toString()}>
                    <Link href="/surfing/surfing_page" className="pr-2 group flex flex-row justify-center">
                        <span className="text-xl md:text-2xl lg:text-3xl group-hover:text-[#ff7600] pr-2">{hobby.icon}</span>
                        <span className="text-base md:text-xl lg:text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#420355] group-hover:via-[#CD113B] group-hover:to-[#FF7600]">{hobby.name}</span>
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="flex flex-row justify-center py-4" key={key.toString()}>
                    <span className="text-xl md:text-2xl lg:text-3xl pr-2">{hobby.icon}</span>
                    <span className="text-base md:text-xl lgtext-2xl">{hobby.name}</span>
                </div>
            )
        }
    })

    return(
        <div className="flex flex-col justify-left items-center shadow-inherit shadow-xl rounded-xl p-2 md:p-6 transition dark:bg-stone-700 hover:shadow-inherit hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300">
            <div className="px-2 lg:px-4 py-2 lg:py-4 w-full">
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">Love...</span>
            </div>
            <div className="flex flex-col md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 p-2 md:p-4 w-full">{hobbies}</div>
        </div>
    )

}