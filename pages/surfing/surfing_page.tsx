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
            <main className="w-screen h-screen bg-gradient-to-b from-[#420355] via-[#CD113B] to-[#FF7600]">
                <div className="flex flex-col justify-center items-center relatvie w-full h-full pb-20 text-[#e2dfce]">
                    <span className="flex flex-col justify-center h-1/4 items-center"><h1 className="text-8xl text-center">Surfing</h1></span>
                    <section className="flex flex-col justify-center items-center relative w-full h-3/4">
                        <p className="text-2xl w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            Started surfing when I was at the first year of college. Although, due to covid, I hadn&rsquo;t been able to travel to the state,
                            I met some great friend through a program for international students in TsinHua University. One day, someone had an idea
                            to take a trip to Yilan for surfing, and with the thought of giving surfing a try, I went with them.
                        </p>
                        <p className="text-2xl w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            The first time I went to surf, I had such a great time. The condition of the wave was so good and beginner friendly, and 
                            I was able to catch a lot of waves. I could recall the first time I stood up from the surfboard and the feeling of the speed,
                            the wind, and the water. At that moment, I knew that I was going to addicted to surfing.
                        </p>
                        <p className="text-2xl w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            In the next summer, I went to do an part&ndash;time coach in Pirate Surf, which is one of the local surf shop in Yilan, Taiwan, 
                            and I was able to teach some beginners how to surf. Got immersed in the surfing vibe and the community of surfing, I was able
                            to meet a lot of great local surfers and learn from them. Gradually, I was able improve my surfing techniques a lot.
                        </p>
                        <p className="text-2xl w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            After I went to the US, due to my school&rsquo;s location, I wasn&rsquo;t able to surf at all. However, my friends and I took a trip to 
                            California and we went surfing in the great Huntington Beach, aka the Surf City. I even bought my first shortboard, which is a SharpEye storm, 
                            at Huntington Beach. However shortboard surfing is a lot harder than longboard surfing, so I didn&rsquo;t manage to surf a single wave during
                            the trip in Orange County.
                        </p>
                        <p className="text-2xl w-1/2 p-8 text-justify indent-8 antialiased tracking-tight">
                            Summer 2022, I went back to Yilan and I start to surf with smaller wave conditions. The gentler wave allowed me to practice catching waves
                            since we had to paddle a lot lol, also that I could practice my surfing techniques without the fear of getting hurt. I improved so much during
                            the one month stay in Yilan.
                        </p>
                    </section>
                </div>  
            </main>
            <footer className="flex flex-col items-center justify-center h-1/6 bg-gradient-to-b from-[#a80000] to-[#5a0382] text-[#e2dfce]">
                <a href="https://www.youtube.com/channel/UCUK8RxZ4aWnc57Vz5Xf4NdQ"><AiFillYoutube className="text-5xl"/></a>
                <div className="text-center font-bold text-2xl py-4">© 2022 Yi Hsiang Chang</div>
            </footer>
        </div>
    )
}