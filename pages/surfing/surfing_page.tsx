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
            </Head>
            <main className="justify-center items-center w-screen h-screen">
                <div className="relatvie w-screen h-1/2">
                </div>
            </main>
            <footer className="flex flex-col items-center justify-center h-1/6">
                <a href="https://www.youtube.com/channel/UCUK8RxZ4aWnc57Vz5Xf4NdQ"><AiFillYoutube className="text-5xl"/></a>
                <div className="text-center font-bold text-2xl py-4">© 2022 Yi Hsiang Chang</div>
            </footer>
        </div>
    )
}