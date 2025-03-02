import React from "react";
import Image from "next/image";
import { profile, resume } from '@/app/assets'; 
import { relative } from "path";

export const Header=() => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div className="flex relative h-32 w-32">
                <Image src={profile.src} alt="headshot" className="rounded-full" fill />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 fancy">
                Hi! I'm Samia Anwar
            </h3>
            <div className="items-center">
                <h1 className="text-3xl sm:text-6xl lg:text-[66px] fancy">
                    software developer 
                </h1>
                <p className="max-w-2xl mx-auto">
                    i am a software developer with experience in full stack web dev and machine learning research 
                </p>
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
            </div>
        </div>
    )
};