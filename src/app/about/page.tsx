import AboutPage from "../../../components/route/about-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "باغ تالار ورسای در جنوب غرب تهران یکی از لوکس‌ترین و مجلل‌ترین باغ تالارهای تهران به شمار می آید.",
};

const AboutContainer = () => {
  return (
    <>
      <div>
        <AboutPage />
      </div>
    </>
  );
};

export default AboutContainer;
