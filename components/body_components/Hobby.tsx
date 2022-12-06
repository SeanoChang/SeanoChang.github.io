import React from "react";
import {RiHeart3Line,RiCodeBoxLine,RiLineChartLine} from "react-icons/ri";
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
        if(hobby.name === "Surfing"){
            return(
                <span className="text-3xl hover:text-4xl hover:-translate-y-1" key={key}><Link href="/surfing/surfing_page">{hobby.icon}</Link></span>
            )
        } else {
            return (
                <span className="text-3xl" key={key}>{hobby.icon}</span>
            )
        }
    })

    return(
        <div id="hobby" className="flex flex-col justify-around items-center shadow-xl rounded-xl p-6 transition hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300">
            <div className="flex flex-row justify-center font-bold text-4xl py-6">
                <RiHeart3Line className="pl-2 text-5xl"/>
                <RiHeart3Line className="pl-2 text-5xl"/>
                <RiHeart3Line className="pl-2 text-5xl"/>
            </div>
            <div className="flex flex-row justify-around text-xl px-4 py-4 w-full">{hobbies}</div>
        </div>
    )

}