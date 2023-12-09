"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
  // insert a number, where the cookie-clicker is counting on
  const [click, setClick] = useState<number>(0);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center dark:bg-black">
      <button className="outline-none border-none">

      </button>
      <p className="text-black dark:text-white">{click}</p>
      <button
        className="bg-black rounded-md p-3 text-white m-5 dark:bg-white dark:text-black"
        onClick={() => setClick(click + 1)}
      >
        count
      </button>
      <a href="https://github.com/i-am-henri/cookie-clicker" className="absolute bottom-2 right-2 underline dark:text-white" target="_blank">see github</a>
    </div>
  );
}
