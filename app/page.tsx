"use server"
import { DatabaseRow } from "@/schema/types";
import HeroSection from "./hero";
import { cookies } from "next/headers";
import NameInput from "./name-input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Terminal } from "lucide-react";
export default async function Home() {
  const name = cookies().get("name")?.value
  const userId = cookies().get("userId")?.value
  const valueCookie: string | undefined = cookies().get("count")?.value
  const value = valueCookie ? parseInt(valueCookie) : 0
  const positionRaw = cookies().get("position")?.value

  if (!userId) {
    // handle later, when the score will saved
  }
  const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, { cache: "no-cache" })
  if (!dataRaw.ok) {
    throw new Error("failes to get leaderboard data.")
  }
  const data: DatabaseRow = await dataRaw.json() as DatabaseRow
  data.data?.sort((a, b) => b.count - a.count);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center dark:bg-black">
      <NameInput userId={userId} name={name} />
      <HeroSection position={positionRaw == "true" ? true : positionRaw == "false" ? false : undefined} name={name} count={value | 0} user={userId} />
      <section className="flex flex-col items-center justify-center w-full min-h-screen">
        <h2 className="text-black dark:text-white text-4xl">leaderboard</h2>
        <ol >
          {
            data.data?.map((data) => {
              return (
                <li className=" dark:text-white rounded-md p-2" style={{ backgroundColor: userId == data._id ? "green" : "transparent", }} key={data._id}>
                  {data.name} : {data.count} {userId == data._id ? "| you" : ""}
                </li>
              )
            })
          }
        </ol>
      </section>
    </div>
  );
}
