"use client";
import { useState } from "react";
export default function Home() {
  const [click, setClick] = useState<number>(199999999999999);
  return (
    <div>
      <p>{click}</p>
      <button
        className="bg-black rounded-md p-5 text-white m-5"
        onClick={() => setClick(click + 1)}
      >
        hochzählen
      </button>
    </div>
  );
}
