import React from "react";
import Image from "next/image";
import { about, techStack } from "@/app/assets"; 
import next from "next";

export const About = () => {
    return (
        <div id="about" className=" w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg fancy"> Introduction </h4>
            <h2 className=" text-center text-5xl fancy"> About Me </h2>
            
            <div className="flex w-full flex-col lg:flex-row items-start gap-20 my-20">
                <div className="flex justify-center sm:flex-row h-100% w-100% items-center">
                    <Image src={about.grad} alt="headshot" width={300} height={450} className="rounded-lg w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto"/>
                </div>
                <div className="flex-1 text-lg">
                    <ul className="mb-10 max-w-2xl">
                        <li className="fancy">&#128214; I'm a November 2024 graduate from the Software and Biomedical Engineering program from McMaster University. 
                        </li>
                        <li className="fancy"> &#128187; Currently, I'm honing my skills in full stack development, keep scrolling to learn about the projects I've worked on!  </li>
                        <li className="fancy"> &#128640; I'm looking for full-time roles where I can apply my skills to create powerful software products. </li>
                    </ul>
                    <h2 className="text-left mb-2 text-lg fancy "> my tech stack (so far...) </h2>
                    <ul>
                        <li>
                            <Image src={techStack.python} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" /> <Image src={techStack.js} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" />
                            <Image src={techStack.react} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" /> 
                            <Image src={techStack.ts} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" /> 
                            <Image src={techStack.twcss} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3"/> 
                            <Image src={techStack.flask} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" /> 
                            <Image src={techStack.aws} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" /> 
                            <Image src={techStack.gcr} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" /> 
                            <Image src={techStack.supabase} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" /> 
                            <Image src={techStack.psql} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ); 
}; 