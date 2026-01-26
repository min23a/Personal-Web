import Hompage from "@/Components/Hompage";
import JsonLd from "@/Components/JsonLd";
import Layout from "@/Components/Layout";
import { personalData } from "@/Data/PersonalData";
import { seoMap } from "@/Data/seoMap";
import { schema } from "@/Data/SeoSchema";
import SEO from "@/Snippet/SEO";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export default function Home() {
  return (
    <>

      <SEO path="" data={seoMap.home} />
      <JsonLd data={schema.home} />

      <Layout>
        <Hompage />
      </Layout>
    </>
  )
}
