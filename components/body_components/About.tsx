import React from 'react';

export const About: React.FC = () => {
    return(
        <div className="flex flex-col justify-left shadow-inherit shadow-xl rounded-xl p-6 transition dark:bg-stone-700 hover:shadow-inherit hover:-translate-y-1 hover:shadow-2xl hover:scale-105 duration-300 ">
            <div className="font-bold text-4xl pb-8">About...</div>
            <div className="flex flex-col pb-4">
                <div className="flex flex-row justify-between py-4">
                    <div className="font-bold">
                        <span className="text-4xl block">Purdue University</span>
                        <span className="text-2xl block">Elmore Family School of Electrical and Computer Engineering</span>
                    </div>
                    <div className="flex flex-col text-2xl justify-center">
                        <span>- West Lafayette, IN</span>
                    </div>
                </div>
                <div className="flex flex-row text-xl">
                    <span className="text-left w-3/4">Bachelor of Science in Computer Engineering</span>
                    <span className="text-right w-1/4 italic">May 2024</span>
                </div>
            </div>
        </div>
    )
}