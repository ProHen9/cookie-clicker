"use client"
import { useEffect, useState } from "react"
import { ChangePosition, SaveScore } from "./action";
import { Button } from "@/components/ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";
interface Props {
    count: number;
    user: string | undefined;
    name: string | undefined;
    position: boolean | undefined
}
export default function HeroSection(props: Props) {
    const localStorage = useLocalStorage()
    const [ButtonPositionSmall, setButtonPositionSmall] = useState<boolean>(props.position || false)
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
            <Button  onClick={async () => {
                setButtonPositionSmall(!ButtonPositionSmall);
                await ChangePosition(!ButtonPositionSmall)
            } } className="absolute top-2 right-2 cursor-pointer" >change button theme</Button>
            <p style={{ display: ButtonPositionSmall ? "block" : "none" }}  className="text-black dark:text-white">{click}</p>
            <Button
                className="bg-black scale-200 rounded-md p-3 text-white m-5 dark:bg-white dark:text-black flex"
                onClick={() => setClick(click + 1)}
            >
                <p className=" text-white dark:text-black mr-3" style={{ display: ButtonPositionSmall ? "none" : "block" }}>{click}</p>
                counting
            </Button>
        </section>
    )
}
