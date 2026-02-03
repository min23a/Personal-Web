
import { GoogleAnalytics } from "@next/third-parties/google";
import { hasAnalyticsConsent } from "./consent";

export default function Ganalytics() {
  // const have = hasAnalyticsConsent();

  // console
  if (!hasAnalyticsConsent()) return null;

  return (
    <>
      <GoogleAnalytics gaId="G-SBNQH3829E" />
    </>
  );
}
