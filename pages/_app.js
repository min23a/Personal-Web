import '@/styles/globals.css'
import { useEffect } from "react";
import { initScrollAnimate, destroyScrollAnimate } from "@/services/scroll-animate"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Analytics } from '@vercel/analytics/react'
import Ganalytics from '@/Snippet/Ganalytics';
import CookieConsent from '@/Components/CookieConsent';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    initScrollAnimate();

    // re-run after route changes (important in pages router)
    const onRouteDone = () => initScrollAnimate();

    // next/router is client-only, so require inside effect
    const Router = require("next/router").default;
    Router.events.on("routeChangeComplete", onRouteDone);

    return () => {
      Router.events.off("routeChangeComplete", onRouteDone);
      destroyScrollAnimate();
    };
  }, []);

  return <>
    <Component {...pageProps} />
    <CookieConsent />
    <Analytics />
    <SpeedInsights />
    <Ganalytics />
  </>
}
