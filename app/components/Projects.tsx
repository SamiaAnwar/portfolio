import React from "react";
import Image from "next/image";
import { projects } from "../assets";
import { SquareArrowOutUpRight } from "lucide-react"; 

export const Projects = () => {
    return (
        <div id="projects" className="container mx-auto px-4">
            <h2 className="text-center text-5xl fancy my-10">My Projects</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col w-[300px] md:w-[350px] lg:w-[400px] bg-white shadow-md border border-slate-200 rounded-lg p-5"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-semibold flex-1 text-center fancy break-words">{project.name}</h2>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <SquareArrowOutUpRight className="w-5 h-5 text-gray-600 hover:text-black"/>
                            </a>
                        </div>
                        <p className="text-sm text-gray-700 text-center break-words mb-4">
                            {project.desc}
                        </p>
                        <Image 
                            src={project.src} 
                            alt={project.name} 
                            width={300} 
                            height={200} 
                            className="rounded-lg object-cover w-full h-auto"
                        />
                        <div className="flex flex-wrap justify-center mt-4 gap-2">
                            {project.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="rounded-lg bg-teal-600 py-1 px-2 text-xs text-white shadow-sm"
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