import { DatabaseRow } from "@/schema/types";
import HeroSection from "./hero";
export default async function Home() {
  const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, { cache: 'no-store' })
  const data: DatabaseRow = await dataRaw.json() as DatabaseRow
  data.data?.sort((a, b) => b.count - a.count);
  console.log(data)
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center dark:bg-black">
      <HeroSection />
      <section className="flex flex-col items-center justify-center w-full min-h-screen">
        <h2 className="text-black dark:text-white text-4xl">leaderboard</h2>
        <ol >
          {
            data.data?.map((data) => {
              return (
                <li className=" dark:text-white" key={data._id}>
                  {data.name} : {data.count}
                </li>
              )
            })
          }
        </ol>
      </section>
    </div>
  );
}
