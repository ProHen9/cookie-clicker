"use server"

import { cookies } from "next/headers"

export async function SaveScore(score: number, user: string | undefined) {
    cookies().set("count", score.toString())

    if (!user) {
        const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: user,
                count: score
            })
        })
        const data = await dataRaw.json()
        console.log(data)
    }
}
export async function SetValue() {
    cookies().set("count", "0")
}