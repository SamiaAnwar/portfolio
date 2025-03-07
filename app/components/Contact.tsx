import React, { useState, FormEvent } from "react";
import { Send } from 'lucide-react';

type Props = {
    isDarkMode: boolean; 
}
export const Contact = ({isDarkMode}: Props) => {
    const [result, setResult] = useState(""); 
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault(); 

        const form = e.currentTarget as HTMLFormElement; 
        const formData = new FormData(form); 

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "c4c59d3f-60e7-42f3-85f0-746ad3824dfd",
                name: formData.get("name"), 
                email: formData.get("email"), 
                message: formData.get("message"), 
            }),
        });
        const res = await response.json(); 
        if (res.success) {
            setResult("Success! Your message is sent :) ");
        } else {
            console.log("Error", res);
            setResult("Oh no! An error occurred :(");
        }
    }
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-lg fancy my-10">Contact Me</h2>
            <h4 className="text-center text-5xl fancy"> Get in touch! </h4>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 fancy">
                I'd love to hear from you! If you have any questions, comment or feedback, please use the form below &#128522; 
            </p>
            <form onSubmit={ handleSubmit } className="max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-gray-900" name="name"/> 
                    <input type="email" placeholder="Enter your email" required className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                    text-gray-900" name="email"/> 
                </div>
                <textarea rows={6} placeholder="Enter your message" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rouned-md bg-white mb-6 text-gray-900" name="message"></textarea>
                <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 border border-white"> Send <Send className="w-5 h-5 text-white" /></button>
                <p className="mt-4"> {result}</p>
            </form>
        </div>
    )
}