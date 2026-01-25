import Hompage from "@/Components/Hompage";
import JsonLd from "@/Components/JsonLd";
import Layout from "@/Components/Layout";
import { personalData } from "@/Data/PersonalData";
import { schema } from "@/Data/SeoSchema";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      <JsonLd data={schema.home}>
        <title>{personalData.name}</title>
        <meta property="og:title" content={personalData.name} key="title" />
        <meta name="description" key="description" content={personalData.meta} />
        <meta name="keywords" content={personalData.tags} />
        <Analytics />
        <SpeedInsights />
      </JsonLd>
      <Layout>
        <Hompage />
      </Layout>
    </>
  )
}
