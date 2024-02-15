"use client"
import { useState } from "react";
import { motion } from "framer-motion";
export default async function Home() {
  const data = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`)
  const [ButtonPositionSmall, setButtonPositionSmall] = useState<boolean>(false)
  // insert a number, where the cookie-clicker is counting on
  const [click, setClick] = useState<number>(0); // <= change this number to cheat. You will start at a higher count.
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center dark:bg-black">
      
      <section className="flex flex-col items-center justify-center w-full min-h-screen">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-black dark:text-white">leaderboard</motion.h2>
        <ol>

        </ol>
      </section>
    </div>
  );
}
