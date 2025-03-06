import React from "react";
import Image from "next/image";
import { experiences } from "../assets";
import exp from "constants";
import { SquareArrowOutUpRight } from "lucide-react"; 


export const Experiences = () => {
    const bgColors: { [key: string]: string } = {
        "teal": "bg-teal-900",
        "yellow": "bg-yellow-600",
        "purple": "bg-purple-900",
    };
    return (
        <div id="experiences" className="container mx-auto px-4 pt-20">
            <h2 className="text-center text-5xl fancy my-10">My Experience</h2>
            <div className="flex flex-wrap justify-center gap-6 ">
                {experiences.map((experience, index) => (
                    <div key={index} 
                        className="relative flex flex-col w-[300px] md:w-[350px] lg:w-[400px] shadow-md border border-slate-200 rounded-lg hover:box-shadow">
                        <div className={`relative flex fill items-center justify-center p-10 rounded-t-lg
                            ${bgColors[experience.bg] || "bg-gray-200"}`}>
                            
                            <h5 className="text-lg text-white">{experience.comp}</h5>
                        
                            <div className="absolute bottom-[-30px]">
                                <Image src={experience.src} alt={experience.comp} width={300} height={200} className="rounded-full w-16 h-16 shadow-md border-4 border-white" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center pt-12 text-center px-3">
                            <p className="text-md break-words leading-snug">{experience.role}</p>
                            <p className="text-md break-words leading-snug">{experience.date}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-5 text-center gap-3 ">
                            <p className="text-sm break-words">{experience.desc}</p>
                            {(experience.link !== undefined) ? (
                                <a href={experience.link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-3">
                                    <SquareArrowOutUpRight className="w-5 h-5 text-gray-600 hover:text-black" />
                                    Publication
                                </a>
                            ):<div></div>}
                        </div>
                        <div className="flex flex-wrap justify-center m-4 gap-2">
                            {experience.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="rounded-lg bg-pink-400 py-1 px-2 text-xs text-white shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}