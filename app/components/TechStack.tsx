import React from "react";
import Image from "next/image";
import { techStack } from "../assets";

export const TechStack = () => {
    return (
        <div className="flex w-full items-center justify-center -mt-20 text-center gap-5">
            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="m-4 rounded-full bg-teal-600 py-0.5 px-1 border border-transparent text-xs text-white transition-all shadow-sm w-23 text-center ">LANGUAGES</div>
                <div className=" m-4 p-2 flex gap-5">
                    <div className=" inline-block  items-center mb-5">
                        <Image src={techStack.python} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block" />
                        <p className="relative text-xs">Python</p>
                    </div>
                    <div className=" inline-block gap-10 items-center mb-5">
                        <Image src={techStack.js} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block" />
                        <p className="relative text-xs">JavaScript</p>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="m-4 rounded-full bg-pink-600 py-0.5 px-1 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">FRONTEND</div>
                <div className=" m-4 p-2 flex gap-5">
                    <div className=" inline-block  gap-10 items-center mb-5">
                        <Image src={techStack.react} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block" />
                        <p className="relative text-xs">React.js</p>
                    </div>
                    <div className=" inline-block gap-10 items-center mb-5">
                        <Image src={techStack.ts} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block items-center" />
                        <p className="relative text-xs text-align-center">TypeScript</p>
                    </div>
                    <div className=" inline-block pr-3 gap-10 items-center mb-5">
                        <Image src={techStack.twcss} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block" />
                        <p className="relative text-xs">TailwindCSS</p>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                <div className="m-4 rounded-full bg-purple-600 py-0.5 px-1 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">BACKEND</div>
                <div className=" m-4 p-2 flex gap-5">
                    <div className=" inline-block  items-center mb-5">
                        <Image src={techStack.flask} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block" />
                        <p className="relative text-xs">Flask</p>
                    </div>
                    <div className=" inline-block  items-center mb-5">
                        <Image src={techStack.aws} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block" />
                        <p className="relative text-xs">Amazon WS</p>
                    </div>
                    <div className="flex inline-block  justify-center mb-5">
                        <Image src={techStack.gcr} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block justify-center" />
                        <p className="relative text-xs justify-center text-center">Google Cloud Run</p>
                    </div>
                    <div className="flex inline-block  justify-center mb-5">
                        <Image src={techStack.docker} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block justify-center" />
                        <p className="relative text-xs justify-center text-center"> Docker</p>
                    </div>
                    <div className="flex inline-block  justify-center mb-5">
                        <Image src={techStack.supabase} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block justify-center" />
                        <p className="relative text-xs justify-center text-center"> Supabase</p>
                    </div>
                    <div className="flex inline-block  justify-center mb-5">
                        <Image src={techStack.psql} alt="tech" width={300} height={450} className="rounded-lg w-10 h-auto inline-block justify-center" />
                        <p className="relative text-xs justify-center text-center"> PostgreSQL</p>
                    </div>
                </div>
            </div>
        </div>
    );
};