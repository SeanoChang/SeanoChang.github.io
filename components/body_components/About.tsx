import React from 'react';

export const About: React.FC = () => {
    return(
        <div className="flex flex-col justify-left shadow-inherit shadow-xl rounded-xl p-2 lg:p-6 transition dark:bg-stone-700 hover:shadow-inherit hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300 ">
            <div className="font-bold text-3xl lg:text-4xl px-2 lg:px-4 py-4">About...</div>
            <div className="flex flex-col pb-4">
                <div className="flex flex-row justify-between px-3 lg:px-6 py-4">
                    <div className="font-bold">
                        <span className="text-2xl lg:text-3xl xl:text-4xl block">Purdue University</span>
                        <span className="text-sm lg:text-xl xl:text-2xl block">Elmore Family School of Electrical and Computer Engineering</span>
                    </div>
                    <div className="flex flex-col text-xs lg:text-base justify-center">
                        <span className="italic">- West Lafayette, IN</span>
                    </div>
                </div>
                <div className="flex flex-row text-xs px-3 lg:px-6 lg:text-base">
                    <span className="text-left w-3/4">Bachelor of Science in Computer Engineering</span>
                    <span className="text-right w-1/4 italic">May 2024</span>
                </div>
            </div>
        </div>
    )
}