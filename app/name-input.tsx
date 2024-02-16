"use client"
import { useEffect, useState } from "react"
import { SaveName } from "./action";

interface Props {
    name: string | undefined,
    userId: string | undefined
}
export default function NameInput(props: Props) {
    const [content, setContent] = useState<string>(props.name || "")
    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log("save")
          SaveName(content,  props.userId)
        }, 1000); // Zeit in Millisekunden
    
        return () => clearTimeout(timeout);
      }, [content]);
    return (
        <input placeholder={props.name || "you name"} value={content} onChange={(e) => setContent(e.target.value)} className="outline-offset-2 absolute top-[30px] left-[30px] outline-none focus:outline-2 p-2 rounded-[10px] focus:dark:outline-white  border-none" />
    )
}