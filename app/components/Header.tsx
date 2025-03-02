import React from "react";
import Image from "next/image";
import { profile, resume, logos } from '@/app/assets'; 
import { relative } from "path";

export const Header=() => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div className="flex relative h-32 w-32">
                <Image src={profile.src} alt="headshot" className="rounded-full" fill />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
                Hi! I'm Samia Anwar &#128522; 
            </h3>
            <div className="items-center">
                <h1 className="text-3xl sm:text-6xl lg:text-[66px] fancy">
                    software developer 
                </h1>
                <p className="max-w-2xl mx-auto">
                    i am a software developer with experience in full stack web dev and machine learning research 
                </p>
                <div>
                    
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                    <a href="#contact" className=" px-10 py-3 border rounded-full bg-black flex items-center gap-2 text-white">
                        contact me
                    </a>
                    <a href={resume.file} download={true} className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
                        my resume
                        <div className="inline-block items-center">
                            <Image src={resume.img} alt="download"
                            width={25} height={25}/>
                        </div>
                    </a>
                </div>
                <div className="align-middle">
                    <a href="https://github.com/SamiaAnwar" rel="noopener noreferrer" target="_blank" className="px-3 py-3">
                        <div className="inline-block items-center align-middle">
                            <Image src={logos.github} alt="download"
                            width={50} height={50}/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/samia-anwar/" rel="noopener noreferrer" target="_blank" className="px-3 py-3">
                        <div className="inline-block items-center align-middle">
                            <Image src={logos.linkedin} alt="download"
                            width={60} height={60}/>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex sm:flex-row h-100% w-100% col-span-2">
                <Image src={profile.src} alt="headshot" width={1666} height={2222} className="rounded-lg"/>
            </div>
        </div>
    )
};