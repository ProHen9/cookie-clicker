"use client"
import {motion} from "framer-motion"
import { useState } from "react"

export default function HeroSection() {
    const [ButtonPositionSmall, setButtonPositionSmall] = useState<boolean>(false)
    // insert a number, where the cookie-clicker is counting on
    const [click, setClick] = useState<number>(0); // <= change this number to cheat. You will start at a higher count.
    return (
        <section className="flex flex-col items-center justify-center w-full min-h-screen">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setButtonPositionSmall(!ButtonPositionSmall)} className="absolute top-2 right-2 dark:text-white underline cursor-pointer" >change button theme</motion.p>
            <motion.p initial={{ opacity: 0 }} style={{ display: ButtonPositionSmall ? "none" : "block" }} animate={{ opacity: 1 }} className="text-black dark:text-white">{click}</motion.p>
            <motion.button
                className="bg-black rounded-md p-3 text-white m-5 dark:bg-white dark:text-black flex"
                onClick={() => setClick(click + 1)}
            >
                <p className=" text-white dark:text-black mr-3" style={{ display: ButtonPositionSmall ? "block" : "none" }}>{click}</p>
                counting
            </motion.button>
            <motion.a
                initial={{ opacity: 0, x: "-50px" }}
                animate={{ x: 0, opacity: 1 }}
                href="https://github.com/i-am-henri/cookie-clicker" className="absolute bottom-2 right-2 underline dark:text-white" target="_blank">see github</motion.a>
        </section>
    )
}