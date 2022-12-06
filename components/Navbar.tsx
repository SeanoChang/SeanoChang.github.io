import React, {useState, useEffect} from 'react';

import {debounce} from '../ultilities/debounce.js';

const inPageLinks:string[] = ["Home", "About", "Skills", "Projects", "Experience", "Hobby"];

const NavBar = (): JSX.Element => {
    // list of links to other sections of the page
    const links: JSX.Element[] = inPageLinks.map((link: string, key: number) => {
        let linkId:string = "#" + link.toLowerCase();
        return (
            <a href={linkId} className="text-2xl hover:underline hover:underline-offset-4" key={key.toString()}>{link}</a>
        )
    })
      
    /* useState hooks to hide and show the navbar */  
    // previous scroll position of y-axis
    const [prevScrollY, setPrevScrollY] = useState(0);

    // add shadow to navbar when the user scrolls up but not at the top of the page
    const [shadow, setShadow] = useState(false);

    // handle scroll event
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if(currentScrollY !== 0){
            setShadow(true);
        } else {
            setShadow(false);
        }

        // update previous scroll position
        setPrevScrollY(currentScrollY);
    }

    // add event listener to window
    useEffect(() => {
        window.addEventListener("scroll", debounce(handleScroll,100));
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);

    function Scrolldown() {
        window.scroll(0,64);
    }

    return (
        <div className={`flex flex-row items-center w-full h-16 sticky top-0 transition duration-150 bg-white ${!shadow? '': 'shadow-lg'}`}>
            <div className="flex flex-row items-center justify-start h-full w-1/5"></div>
            <div className="flex flex-row items-center justify-around h-full w-3/5">
                {links}
            </div>
            <div className="h-full w-1/5"></div>
        </div>
    )
}

export default NavBar;