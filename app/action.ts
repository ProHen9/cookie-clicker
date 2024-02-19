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
            body: JSON.stringify([{ "name": name, "count": score }])
        })
        if (!dataRaw.ok) {
            throw new Error("Failed to save score.")
        }
        const data = await dataRaw.json()
        console.log(data)
        cookies().set("userId", data[0]._id)
    }
    if (userId && name) {
        //FIXME: score wird geupdatet
        const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: cookies().get("userId")?.value,"name": name, "count": score })
        })
        console.log(dataRaw)
        console.log(await dataRaw.json())
        if (!dataRaw.ok) {
            console.log("error")
        }
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
        console.log(value)
        if (value == 0) {
            //FIXME: User hat seinem Namen geupdated, allerdings ist seine Anzahl auf 0
            return
        }
        const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "_id": userId, "name": name, "count": value})
        })
        if (!dataRaw.ok) {
            throw new Error("Failes to update name.")
        }

    }
}
export async function ChangePosition(position: boolean) {
    cookies().set("position", position.toString())
}