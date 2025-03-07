import React from "react";
import Image from "next/image";
import { logo, logos } from "../assets";

export const Footer = () => {
    return (
        <div className="flex items-center justify-between mt-20 pt-5 pb-10 pr-20 pl-20 gap-12 bg-rose-200 text-gray-600">
            <Image src={logo.light} alt={"sunflower"} width={300} height={200} className="rounded-full w-10 h-10" />
            <div className="flex flex-row items-center">
                <a href="https://github.com/SamiaAnwar" >
                    <Image src={logos.github} alt={"github link"} width={300} height={200} className="rounded-full w-11 h-11 gray-900 invert" />
                </a>

                <a href="https://www.linkedin.com/in/samia-anwar/">
                    <Image src={logos.linkedin} alt={"github link"} width={300} height={200} className="rounded-full w-16 h-16 invert" />
                </a>

            </div>
        </div>
    )
};