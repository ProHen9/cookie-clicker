"use server"

import { cookies } from "next/headers"

export async function SaveScore(score: number, user: string | undefined) {
}
export async function SetValue() {
    cookies().set("count", "0")
}