"use client";

import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BgShapes from "@/components/landing/bg-shapes";
import { Inter, Playfair_Display } from "next/font/google";

import { useEffect } from "react";

import { Providers } from "./providers";
import { CartProvider } from "@/components/cart/cart-context";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-out-cubic",
      disable: "phone",
      startEvent: "DOMContentLoaded",
      mirror: true,
      offset: 50,
    });
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '306241734403985');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', 'G-LMLYRLFCLR', 'auto');
              ga('send', 'pageview');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} ${playfair.variable} font-inter antialiased bg-slate-100 tracking-tight`}
      >
        <CartProvider>
          <Providers>
            <div className="flex min-h-screen flex-col overflow-hidden">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </Providers>
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
