import "~/styles/globals.css";
import "~/styles/lucida/stylesheet.css";
import "famfamfam-silk/dist/sprite/famfamfam-silk.min.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { KathyNav } from '~/app/_components/nav/nav';
import { KathyFooter } from '~/app/_components/footer/footer';

import NextTopLoader from 'nextjs-toploader';

import { Gamja_Flower, Hanken_Grotesk, Karla } from 'next/font/google';
import Link from 'next/link';
import { KathyCard } from "./_components/card/card";
import { KathyAvatar } from "./_components/avatar/avatar";
import Timer from "./_components/time/time";
import { Name } from "./_components/name/name";
import { KathyQuote } from "./_components/quote/quote";

const karla = Hanken_Grotesk({
  subsets: ['latin'],
  weight: 'variable',
});

const gamja = Gamja_Flower({
    subsets: ['latin'],
    weight: '400'
});

export const metadata: Metadata = {
  title: "katelyn.moe",
  description: "teeheee",
  icons: [{ rel: "icon", url: "/avatars/kat.webp" }],
  authors: [{name: 'katelyn', url: 'https://katelyn.moe'}],
  openGraph: {
    title: 'katelyn.moe',
    siteName: 'katelyn.moe',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={karla.className}>
      <body className="dark">
        <TRPCReactProvider>
          <NextTopLoader />
          <main>
            <KathyNav />
            <div className="content">
              <KathyCard>
                <div className="card-top">
                    <div className="time-top">
                        <Timer />
                    </div>
                    <KathyAvatar image="/avatars/kat.webp" alt="avatar for kathy" size="lg"/>
                    <div className="top-info">
                        <h1><Name /></h1>
                        <p className="info-body">welcome to my corner of the internet~</p>
                    </div>
                </div>
              </KathyCard>
              {children}
            </div>
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
