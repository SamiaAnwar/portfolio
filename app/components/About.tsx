import React from "react";
import Image from "next/image";
import { about, techStack } from "@/app/assets"; 
import next from "next";

export const About = () => {
    return (
        <div id="about" className="relative w-full px-[12%] py-10 sm:mt-5 mt-20">
            <h4 className="text-center mb-2 text-lg fancy"> Introduction </h4>
            <h2 className=" text-center text-5xl fancy"> About Me </h2>
            <div className="flex w-full flex-col items-center justify-center text-center gap-5 my-10">
                {/* <div className="flex justify-center lg:flex-row h-100% w-100% items-center">
                    <Image src={about.grad} alt="headshot" width={300} height={450} className="rounded-lg w-50 sm:w-70 lg:w-80 xl:w-85 h-auto"/>
                </div> */}
                <div className="flex-1 text-lg">
                    <ul className="mb-10">
                        <li className="fancy">&#128214; I&#39;m a November 2024 graduate from the Software and Biomedical Engineering program from McMaster University. 
                        </li>
                        <li className="fancy"> &#128187; Currently, I&#39;m honing my skills in full stack development, keep scrolling to learn about the projects I&#39;ve worked on!  </li>
                        <li className="fancy"> &#128640; I&#39;m looking for full-time roles where I can apply my skills to create powerful software products. </li>
                    </ul>
                </div>
            </div>
        </div>
    ); 
}; 