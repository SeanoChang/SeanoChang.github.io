import {IoMailOutline} from 'react-icons/io5';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

export default function Footer(){
    return (
        <div className="flex flex-row justify-center h-1/5 w-full py-12 bg-stone-100 dark:bg-stone-900">
            <footer className="flex flex-col w-full items-center">
                <div className="flex flex-row justify-around w-1/2 py-6">
                    <a href="mailto:seanooochang755@outlook.com" className="cursor-pointer"><IoMailOutline className="text-2xl md:text-4xl hover:scale-105"/></a>
                    <a href="https://www.linkedin.com/in/yi-hsiang-chang-12777223a" className="cursor-pointer"><BsLinkedin className="text-2xl md:text-4xl hover:scale-105"/></a>
                    <a href="https://github.com/SeanoChang" className="cursor-pointer"><AiFillGithub className="text-2xl md:text-4xl hover:scale-105"/></a>
                </div>
                <div className="text-center font-bold text-base md:text-2xl py-4">© 2022 Yi Hsiang Chang</div>
            </footer>
        </div>
    )
}