import React from "react";
import Image from "next/image";
import { profile, resume, logos } from '@/app/assets'; 
import { relative } from "path";

export const Header=() => {
    return (
        <div className=" relative w-12/13 max-w-3xl mx-auto h-screen  items-center justify-center justify-between gap-4 grid grid-cols-1 sm:grid-cols-5 pt-20">
             <div className="flex items-start justify-center sm:hidden">
                <Image src={profile.src} alt="headshot" width={1666} height={2222} className="rounded-full sm:rounded-lg w-64 h-auto"/>
            </div>
            <div className="col-span-3 flex flex-col items-center sm:items-start">
                <h1 className="text-3xl sm:text-6xl lg:text-[66px] mb-5 fancy">
                    samia anwar 
                </h1>
                <h3 className="flex text-center sm:text-left gap-2 text-xl md:text-2xl mb-3 fancy">
                software engineer with experience in full stack web dev and machine learning research
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 mb-5">
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
            <div className="flex justify-center hidden sm:block sm:justify-end col-span-2">
                <Image src={profile.src} alt="headshot" width={1666} height={2222} className="rounded-full sm:rounded-lg w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto"/>
            </div>
            
        </div>
    )
};