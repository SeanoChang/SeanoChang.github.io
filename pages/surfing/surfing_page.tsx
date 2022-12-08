import React from 'react';
import Head from 'next/head';

import {AiFillYoutube} from 'react-icons/ai';

export default function SurfingPage() {

    return(
        <div className="h-screen w-screen block">
            <Head>
                <title>Yi Hsiang Chang - Surfing</title>
                <meta name="description" content="Yi Hsiang Chang Surfing Page" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet='utf-8' />
            </Head>
            <main className="w-screen min-h-screen bg-gradient-to-b from-[#420355] via-[#CD113B] to-[#FF7600]">
                <div className="flex flex-col justify-center items-center relatvie w-full h-full pb-20 text-[#e2dfce]">
                    <div className="flex flex-col justify-center h-1/4 items-center py-16"><h1 className="text-4xl sm:text-6xl lg:text-8xl text-center">Surfing</h1></div>
                    <div  className="flex flex-col justify-center items-center relative w-full">
                        <p className="text-sm sm:text-base lg:text-2xl w-5/6 sm:w-3/4 lg:w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            Started surfing when I was at the first year of college. Although, due to covid, I hadn&rsquo;t been able to travel to the states,
                            I met some great friends through a program for international students in TsinHua University. One day, someone had an idea
                            to take a trip to Yilan for surfing, and with the thought of giving surfing a try, my journey for surfing started since then.
                        </p>
                        <p className="text-sm sm:text-base lg:text-2xl w-5/6 sm:w-3/4 lg:w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            The first time I went to surf, I had such a great time. The condition of the wave was so good and beginner friendly, and 
                            I finally caught a wave after 2 hours of falling off the board. I could recall the first time I stood up from the surfboard 
                            and the feeling of the speed, the wind, and the water. At that moment, I knew that I was addicted to surfing.
                        </p>
                        <p className="text-sm sm:text-base lg:text-2xl w-5/6 sm:w-3/4 lg:w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            In the next summer, I went to do an part&ndash;time coach in Pirate Surf, which is one of the local surf shop in Yilan, Taiwan, 
                            and I was able to teach some beginners how to surf. Got immersed in the surfing vibe and the community of surfing, I met a lot 
                            of great local surfers and other part-time/full-time coaches. By learning surfing concepts and techniques from them and compete
                            with them, I managed improve my surfing a lot during that period of time.
                        </p>
                        <p className="text-sm sm:text-base lg:text-2xl w-5/6 sm:w-3/4 lg:w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            After I went to the US, due to my school&rsquo;s location, Indiana, USA, I wasn&rsquo;t able to surf at all. However, my friends and I took 
                            a trip to California during winter break and we went surfing in the great Huntington Beach, aka the Surf City. Even though the weather and water
                            was so cold, it couldn&rsquo;t stop my fire of passion for surfing. I even bought my first shortboard, which is a SharpEye storm, 
                            at Huntington Beach&rsquo;s surf shop. However shortboard surfing is a lot harder than longboard surfing, so I didn&rsquo;t manage to surf a 
                            single wave during the stay in Orange County. Came back to school, I was still surfing in my mind and during the my dreams, and I was looking 
                            forward to the next time a could go surfing.
                        </p>
                        <p className="text-sm sm:text-base lg:text-2xl w-5/6 sm:w-3/4 lg:w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            Summer 2022 came, and I went back to Yilan for being the part-time coach. The gentler summer waves allowed me to practice catching waves
                            and to surf without the fear of getting hurt or slammed by the waves. I improved so much during the time. Due to the mushy waves, my paddling
                            techniques improved significantly, in order to catch a wave obviously. Also, due to the forgiving condition, I was able to practice my surfing
                            skills, such as popping up and turning, which is still a work in progess and my postures was ugly af lol. Not only did I improved my surfing,
                            I made some great friends and memories. Happy time always went by so fast, and I had to say goodbye to my friends and surfing once the summer
                            break was coming to an end. Looking forward to the next time I can go surfing again. See you in the water... peace
                        </p>
                    </div>
                </div>  
            </main>
            <footer className="flex flex-col items-center justify-center h-1/6 bg-gradient-to-b from-[#a80000] to-[#5a0382] text-[#e2dfce]">
                <a href="https://www.youtube.com/channel/UCUK8RxZ4aWnc57Vz5Xf4NdQ"><AiFillYoutube className="text-3xl sm:text-5xl"/></a>
                <div className="text-center font-bold text-base sm:text-2xl py-4">© 2022 Yi Hsiang Chang</div>
            </footer>
        </div>
    )
}