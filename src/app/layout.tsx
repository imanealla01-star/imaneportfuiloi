import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://imanealla.com"),
  title: {
    default:
      "Imane Alla — Doctorante en Sociologie, Travail Social & Développement",
    template: "%s | Imane Alla",
  },
  description:
    "Doctorante en sociologie, spécialisée en travail social et développement social. Gestion de projets sociaux, leadership et engagement pour l'inclusion sociale au Maroc et dans le monde arabe.",
  keywords: [
    "sociologue",
    "travail social",
    "développement social",
    "doctorante sociologie",
    "projets sociaux",
    "politiques publiques",
    "inclusion sociale",
    "formation",
    "Maroc",
  ],
  authors: [{ name: "Imane Alla" }],
  creator: "Imane Alla",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://imanealla.com",
    siteName: "Imane Alla — Doctorante en Sociologie",
    title:
      "Imane Alla — Doctorante en Sociologie, Travail Social & Développement",
    description:
      "Doctorante en sociologie, spécialisée en travail social et développement social. Gestion de projets sociaux, leadership et engagement pour l'inclusion sociale.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imane Alla — Doctorante en Sociologie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imane Alla — Doctorante en Sociologie & Travail Social",
    description:
      "Doctorante en sociologie, spécialisée en travail social et développement social. Gestion de projets sociaux et leadership.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* ================================================
            GOOGLE TAG MANAGER (GTM)
            Replace GTM-XXXXXXX with your actual GTM ID
            ================================================ */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              // })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />

        {/* ================================================
            META PIXEL (Facebook)
            Replace YOUR_PIXEL_ID with your actual Meta Pixel ID
            ================================================ */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // !function(f,b,e,v,n,t,s)
              // {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              // n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              // if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              // n.queue=[];t=b.createElement(e);t.async=!0;
              // t.src=v;s=b.getElementsByTagName(e)[0];
              // s.parentNode.insertBefore(t,s)}(window, document,'script',
              // 'https://connect.facebook.net/en_US/fbevents.js');
              // fbq('init', 'YOUR_PIXEL_ID');
              // fbq('track', 'PageView');
            `,
          }}
        />

        {/* ================================================
            TIKTOK PIXEL
            Replace YOUR_TIKTOK_PIXEL_ID with your actual TikTok Pixel ID
            ================================================ */}
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // !function (w, d, t) {
              //   w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
              //   ttq.load('YOUR_TIKTOK_PIXEL_ID');
              //   ttq.page();
              // }(window, document, 'ttq');
            `,
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col antialiased">
        {/* GTM noscript fallback - uncomment when GTM is active */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
