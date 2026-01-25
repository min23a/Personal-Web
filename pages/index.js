import Hompage from "@/Components/Hompage";
import JsonLd from "@/Components/JsonLd";
import Layout from "@/Components/Layout";
import { personalData } from "@/Data/PersonalData";
import { schema } from "@/Data/SeoSchema";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{personalData.name}</title>
        <meta property="og:title" content={personalData.name} key="title" />
        <meta name="description" key="description" content={personalData.meta} />
        <meta name="keywords" content={personalData.tags} />
        <Analytics />
        <SpeedInsights />
      </Head>
      <JsonLd data={schema.home} />

      <Layout>
        <Hompage />
      </Layout>
    </>
  )
}
