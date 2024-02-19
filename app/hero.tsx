"use client"
import { useEffect, useState } from "react"
import { SaveScore } from "./action";
import { Button } from "@/components/ui/button";
interface Props {
    count: number;
    user: string | undefined;
    name: string | undefined;
}
export default function HeroSection(props: Props) {
    const [ButtonPositionSmall, setButtonPositionSmall] = useState<boolean>(false)
    // insert a number, where the cookie-clicker is counting on
    const [click, setClick] = useState<number>(props.count); // <= change this number to cheat. You will start at a higher count.
    useEffect(() => {
        const timeout = setTimeout(() => {
          SaveScore(click,  props.user, props.name)
        }, 1000); // Zeit in Millisekunden
    
        return () => clearTimeout(timeout);
      }, [click]);
    return (
        <section className="flex flex-col items-center justify-center w-full min-h-screen">
            <p  onClick={() => setButtonPositionSmall(!ButtonPositionSmall)} className="absolute top-2 right-2 dark:text-white underline cursor-pointer" >change button theme</p>
            <p style={{ display: ButtonPositionSmall ? "none" : "block" }}  className="text-black dark:text-white">{click}</p>
            <Button
                className="bg-black rounded-md p-3 text-white m-5 dark:bg-white dark:text-black flex"
                onClick={() => setClick(click + 1)}
            >
                <p className=" text-white dark:text-black mr-3" style={{ display: ButtonPositionSmall ? "block" : "none" }}>{click}</p>
                counting
            </Button>
            <a
                
                href="https://github.com/i-am-henri/cookie-clicker" className="absolute bottom-2 right-2 underline dark:text-white" target="_blank">see github</a>
        </section>
    )
}