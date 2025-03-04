import React from "react";
import Image from "next/image";
import { about, techStack } from "@/app/assets"; 
import next from "next";

export const About = () => {
    return (
        <div id="about" className="relative w-full px-[12%] py-10 sm:mt-5 mt-20">
            <h4 className="text-center mb-2 text-lg fancy"> Introduction </h4>
            <h2 className=" text-center text-5xl fancy"> About Me </h2>
            <div className="flex w-full flex-col lg:flex-row items-center gap-5 my-10">
                <div className="flex justify-center lg:flex-row h-100% w-100% items-center">
                    <Image src={about.grad} alt="headshot" width={300} height={450} className="rounded-lg w-50 sm:w-70 lg:w-80 xl:w-85 h-auto"/>
                </div>
                <div className="flex-1 text-lg">
                    <ul className="mb-10 max-w-2xl">
                        <li className="fancy">&#128214; I'm a November 2024 graduate from the Software and Biomedical Engineering program from McMaster University. 
                        </li>
                        <li className="fancy"> &#128187; Currently, I'm honing my skills in full stack development, keep scrolling to learn about the projects I've worked on!  </li>
                        <li className="fancy"> &#128640; I'm looking for full-time roles where I can apply my skills to create powerful software products. </li>
                    </ul>
                    <div className="relative w-full my-6 rounded-lg max-w-2x flex flex-col md:flex-row ">
                        <div>
                            <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-1 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center ">LANGUAGES</div>
                            <div className=" p-2">
                                <Image src={techStack.python} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" /> <Image src={techStack.js} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" />
                            </div>
                        </div>
                        <div >
                            <div className="mb-4 rounded-full bg-pink-600 py-0.5 px-1 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">FRONTEND</div>
                            <div className=" p-2">
                                <Image src={techStack.react} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" />
                                <Image src={techStack.ts} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" />
                                <Image src={techStack.twcss} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3"/>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4 rounded-full bg-purple-600 py-0.5 px-1 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">BACKEND</div>
                            <div className=" p-2">
                                <Image src={techStack.flask} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" />
                                <Image src={techStack.aws} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" />
                                <Image src={techStack.gcr} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" />
                                <Image src={techStack.docker} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3"/>
                                <Image src={techStack.supabase} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3" />
                                <Image src={techStack.psql} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block m-3"/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    ); 
}; 