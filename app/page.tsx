"use client";
import { useState } from "react";
export default function Home() {
  // insert a number, where the cookie-clicker is counting on
  const [click, setClick] = useState<number>(0);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <p>{click}</p>
      <button
        className="bg-black rounded-md p-5 text-white m-5"
        onClick={() => setClick(click + 1)}
      >
        count
      </button>
    </div>
  );
}
