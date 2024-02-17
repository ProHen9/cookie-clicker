"use server"

import { DatabaseRow } from "@/schema/types"
import { cookies } from "next/headers"

export async function SaveScore(score: number, userId: string | undefined, name: string | undefined) {
    cookies().set("count", score.toString())
    if (!userId && !name) {
        //FIXME: user will nicht auf das Leaderboard
        return
    }
    if (!userId && name) {
        const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([{ "name": name, "count": score.toString() }])
        })
        const data = await dataRaw.json()
        cookies().set("userId", JSON.stringify(data[0]._id))
        console.log(JSON.stringify(data))
    }
    if (userId && name) {
        const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([{ "_id": userId, "name": name, "count": score.toString() }])
        })
    }
}
export async function SetValue() {
    cookies().set("count", "0")
}
export async function SaveName(name: string, userId: string | undefined) {
    cookies().set("name", name)
    if (userId) {
        //FIXME: user ist schon auf dem Leaderboard und wird geupdatet
        const valueCookie: string | undefined = cookies().get("count")?.value
        const value = valueCookie ? parseInt(valueCookie) : 0
        if (value == 0) {
            //FIXME: User hat seinem Namen geupdated, allerdings ist seine Anzahl auf 0
            return
        }
        const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([{ "_id": userId, "name": name, "count": value }])
        })

    }
}