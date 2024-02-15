import { DatabaseRow } from "@/schema/types";
import HeroSection from "./hero";
export default async function Home() {
  const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`)
  const data: DatabaseRow = await dataRaw.json() as DatabaseRow
  console.log(data)
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center dark:bg-black">
      <HeroSection />
      <section className="flex flex-col items-center justify-center w-full min-h-screen">
        <h2 className="text-black dark:text-white">leaderboard</h2>
        {
          data.data?.map((data) => {
            return (
              <div className="flex flex-col items-center justify-center w-full min-h-screen" key={data._id}>
                <h2 className="text-black dark:text-white">{data.name}</h2>
                <h2 className="text-black dark:text-white">{data.count}</h2>
              </div>
            )
          })
        }
      </section>
    </div>
  );
}
