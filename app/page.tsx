import { DatabaseRow } from "@/schema/types";
import HeroSection from "./hero";
import LocalStorageCheck from "./localStorageCheck";
export default async function Home() {
  const dataRaw = await fetch(`https://v1.appbackend.io/v1/rows/${process.env.TABLE_ID}?api_key=${process.env.API_KEY}`, { cache: 'no-store' })
  const data: DatabaseRow = await dataRaw.json() as DatabaseRow
  data.data?.sort((a, b) => b.count - a.count);
  console.log(data)
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center dark:bg-black">
      <LocalStorageCheck />
      <HeroSection />
      <section className="flex flex-col items-center justify-center w-full min-h-screen">
        <h2 className="text-black dark:text-white">leaderboard</h2>
        <ol>
          {
            data.data?.map((data) => {
              return (
                <li className="flex flex-col items-center justify-center bg-[#111011]  dark:bg-white p-3 rounded-md " key={data._id}>
                  <h2 className="text-white dark:text-black">{data.name}</h2>
                  <h2 className="text-white dark:text-black">{data.count}</h2>
                </li>
              )
            })
          }
        </ol>
      </section>
    </div>
  );
}
