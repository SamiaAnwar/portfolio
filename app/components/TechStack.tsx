import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { techStack } from "../assets";
import { Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    isDarkMode: boolean; 
}
export const TechStack = ({isDarkMode}: Props) => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    useEffect(() => {
        if (!api) {
            return 
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    const scrollToIndex = (index: number) => {
        api?.scrollTo(index);
    };
    return (
        <div className="relative h-96 max-h-[500px] px-5 mx-auto mt-5 max-w-7xl lg:mt-6">
            <Carousel className="flex w-full items-center justify-center -mt-20 mb-20 text-center gap-5 z-10"
                setApi={setApi}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{ loop: true }}>
                <CarouselContent>
                    <CarouselItem key={1} className='flex justify-center items-center lg:basis-6/32'>
                        <div className={`${isDarkMode ? "bg-black shadow-md shadow-teal-600 border-teal-600": "bg-white shadow-sm border-slate-200"} relative flex flex-col my-6 border rounded-lg`}>
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
                    </CarouselItem>
                    <CarouselItem key={2} className='flex justify-center items-center lg:basis-9/32'>
                        <div className={`${isDarkMode ? "bg-black shadow-md shadow-red-500 border-pink-600": "bg-white shadow-sm border-slate-200"} relative flex flex-col my-6 border rounded-lg`}>
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
                    </CarouselItem>
                <CarouselItem key={3} className='flex justify-center items-center lg:basis-17/32'>
                    <div className={`${isDarkMode ? "bg-black shadow-md shadow-purple-600 border-purple-600": "bg-white shadow-sm border-slate-200"} relative flex flex-col my-6 border rounded-lg`}>
                        <div className="m-4 rounded-full bg-purple-600 py-0.5 px-1 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">BACKEND</div>
                        <div className=" m-4 p-2 flex gap-5">
                            <div className=" inline-block  items-center mb-5">
                                <Image src={techStack.flask} alt="tech" width={300} height={450} className={`${isDarkMode ? "invert": ""} rounded-lg w-10 h-auto inline-block`} />
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
                    </CarouselItem>
                </CarouselContent >
                <div className="hidden sm:block lg:hidden absolute top-1/2 left-2 flex items-center justify-center">
                    <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
                </div>
                <div className="hidden sm:block lg:hidden absolute top-1/2 right-2 flex items-center justify-center">
                    <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
                </div>
            </Carousel >
        </div>

    );
};