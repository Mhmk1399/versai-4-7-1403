import type { Metadata } from "next/types";
import "./globals.css";
import NavBar from "../../components/header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { EdgeStoreProvider } from "../../lib/edgestore";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import CanonicalUrl from "../../components/CanonicalUrl";

export const dynamic = "force-dynamic";

// Define metadata with proper Google, Yahoo, and Yandex verification tags
export const metadata: Metadata = {
  verification: {
    google: "-2YgenFOh4xq185ypA7qdCTwnq6t2EFX8nh2qC9QpDQ",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  // title: "شاتو دو ورسای: بروزترین و لاکچری‌ترین باغ تالار در تهران",
  // description:
  //   "شاتو دو ورسای | لاکچری‌ترین باغ تالار تهران | ظرفیت: 1300 نفر | دسترسی بیست دقیقه‌ای از تهران | استیج رقص روی آب |",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-P2D3326Q"
        ></script>

        {/* End Google Tag Manager */}

        {/* Dynamically add meta tags for verification */}
        <meta
          name="google-site-verification"
          content={metadata.verification?.google?.toString() || ""}
        />
        <meta
          name="y_key"
          content={metadata.verification?.yahoo?.toString() || ""}
        />
        <meta
          name="yandex-verification"
          content={metadata.verification?.yandex?.toString() || ""}
        />

        {/* Additional static Google verification meta tag */}
        <meta
          name="google-site-verification"
          content="-2YgenFOh4xq185ypA7qdCTwnq6t2EFX8nh2qC9QpDQ"
        />

        {/* Remove the static canonical link - we'll use the dynamic one */}
        {/* <link rel="canonical" href="https://kakhversai/" /> */}

        <link
          rel="icon"
          href="/assets/images/faviicon.png"
          type="image/x-icon"
        />

        {/* <title>{metadata.title?.toString() || ""}</title>
        <meta
          name="description"
          content={metadata.description?.toString() || ""}
        /> */}
      </head>
      <body>
        {/* Add the CanonicalUrl component to handle dynamic canonical URLs */}
        <CanonicalUrl />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2D3326Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Load GTM with next/script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2D3326Q');
          `,
          }}
        />
        {/* {/* End Google Tag Manager (noscript) */}

        <NavBar />
        <EdgeStoreProvider>{children}</EdgeStoreProvider>

        {/* Bottom buttons */}
        <div className="fixed bottom-2 right-5 flex flex-row space-y-4">
          <Link href="/menue">
            <button className="bg-gradient-to-l hover:bg-green border-2 border-gold bg-green/50  backdrop-blur-xl text-white py-2 font-bold px-6 mx-auto rounded-md shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              درخواست قیمت
            </button>
          </Link>
        </div>
        <div className="fixed bottom-2 left-5 flex flex-row space-y-4">
          <Link href="tel:+989123314145" id="call-buttom-fixed-botom">
            <button className="bg-gradient-to-l hover:bg-green border-2 border-gold bg-green/50  backdrop-blur-xl text-white py-2 font-bold px-6 mx-auto rounded-md shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              تماس با مدیریت
            </button>
          </Link>
        </div>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
