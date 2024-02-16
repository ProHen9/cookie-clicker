"use server"

import { cookies } from "next/headers"

export async function SaveScore(score: number, user: string | undefined, name: string | undefined) {
    cookies().set("count", score.toString())
    if (!user && !name) {
        //FIXME: user will nicht auf das Leaderboard
        return
    }
    if (!user && name) {
        const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([{"name": name,"count":score.toString()}])
        })
        const data = await dataRaw.json()
        console.log(data)
    }
}
export async function SetValue() {
    cookies().set("count", "0")
}