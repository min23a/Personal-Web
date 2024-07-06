import Navigation from "@/Components/Navigation";
import { personalData } from '@/Data/PersonalData';
import Head from "next/head";
import Hompage from "@/Components/Hompage";
import { Analytics } from "@vercel/analytics/react"
import Announcement from "@/Components/Section/Announcement";

export default function Home() {
  return (
    <>
      <Head>
        <title>{personalData.name}</title>
        <meta property="og:title" content={personalData.name} key="title" />
        <meta name="description" key="description" content={personalData.meta} />
        <meta name="keywords" content={personalData.tags} />
      </Head>
      <main>
        <section className="sticky w-full bg-black text-white text-center p-2 ">
          <Announcement />
        </section>
        <section className="sticky top-0 w-full bg-secondary z-50">
          <Navigation />
        </section>
        <section className="w-[80vw] m-auto max-w-[1200px]">
          <Hompage />
        </section>
        <Analytics />
      </main>
    </>
  )
}
