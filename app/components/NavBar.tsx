import React from "react";
import Image from "next/image";
import { logo } from '@/app/assets'; 

export const NavBar = () => {
    return (
        <>
            <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                <div className='relative h-12 w-12 cursor-pointer mr-14'> 
                    <a href="#top">
                        <Image src={logo.src} alt="sunflower logo" fill className='!relative'/>
                    </a>
                </div>
                <ul className="hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3">
                    <li><a href="#top"> samia&lt;3 </a></li>
                    <li><a href="#about"> about </a></li>
                    <li><a href="#projects"> projects </a></li>
                    <li><a href="#experiences"> experiences </a></li>
                    <li><a href="#contact"> contact me </a></li>
                </ul>
                <div>
                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"> contact </a>
                </div>
            </nav>
        </>
    ); 
};
