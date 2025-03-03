import React, { createRef, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { logo, darkModeIcon, menuIcon, close} from '@/app/assets'; 

export const NavBar = () => {
    const [isScroll, setIsScroll] = useState<Boolean>(false); 
    const sideMenuRef = useRef<HTMLInputElement>(null); 
    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)'; 
        }        
    }
    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)'; 
        }     
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])
    return (
        <>
            <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                <div className='relative h-12 w-12 cursor-pointer mr-14'> 
                    <a href="#top">
                        <Image src={logo.src} alt="sunflower logo" fill className='!relative'/>
                    </a>
                </div>
                <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "bg-opacity-25 backdrop-blur-lg shadow-sm": ""}`}>
                    <li ><a className="fancy" href="#top"> samia&lt;3 </a></li>
                    <li><a className="fancy" href="#about"> about </a></li>
                    <li><a className="fancy" href="#projects"> projects </a></li>
                    <li><a className="fancy"href="#experiences"> experiences </a></li>
                    <li><a className="fancy" href="#contact"> contact me </a></li>
                </ul>


                <div className='flex items-center gap-4'>
                    <div className="relative h-7 w-7">
                        <button>
                            <Image src={darkModeIcon.src} alt="moon" className='!relative' fill/>
                        </button>
                    </div>
                    <a href="#contact" className="fancy hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"> contact </a>
                    <button onClick={ openMenu }className="h-9 w-9 block md:hidden ml-3">
                        <Image src={ menuIcon.src } alt="menu icon" fill className='!relative'/>
                    </button>

                </div>

                <div ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom w-64 z-50 h-screen bg-rose-50 transition duration-500">
                    <ul>
                        <div className="absolute right-6 top-6">
                            <button onClick={ closeMenu } className="h-9 w-9 block md:hidden ml-3">
                            <Image src={ close.src } alt="x" fill className='!relative'/>
                            </button>
                        </div>
                        <li ><a onClick={ closeMenu } className="fancy" href="#top"> samia&lt;3 </a></li>
                        <li><a onClick={ closeMenu } className="fancy" href="#about"> about </a></li>
                        <li><a onClick={ closeMenu } className="fancy" href="#projects"> projects </a></li>
                        <li><a onClick={ closeMenu } className="fancy"href="#experiences"> experiences </a></li>
                        <li><a onClick={ closeMenu } className="fancy" href="#contact"> contact me </a></li>
                    </ul>
                </div>
            </nav>
        </>
    ); 
};
