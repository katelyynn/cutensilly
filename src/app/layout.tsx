import "~/styles/globals.css";
import "~/styles/lucida/stylesheet.css";
import "famfamfam-silk/dist/sprite/famfamfam-silk.min.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { KathyNav } from '~/app/_components/nav/nav';
import { KathyFooter } from '~/app/_components/footer/footer';

import NextTopLoader from 'nextjs-toploader';

import { Bricolage_Grotesque, Gamja_Flower, Hanken_Grotesk, Instrument_Serif, Karla } from 'next/font/google';
import Link from 'next/link';
import { KathyCard } from "./_components/card/card";
import { KathyAvatar } from "./_components/avatar/avatar";
import Timer from "./_components/time/time";
import { Name } from "./_components/name/name";
import { KathyQuote } from "./_components/quote/quote";

import { ThemeProvider } from 'next-themes';

const karla = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: 'variable',
});

const instrument = Instrument_Serif({
    subsets: ['latin'],
    weight: '400',
    style: ['normal', 'italic']
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
        <html lang="en" className={karla.className} suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <TRPCReactProvider>
                        <NextTopLoader />
                        <main>
                            <KathyNav />
                            <div className="content">
                                <KathyCard>
                                    <div className="card-top">
                                        <Name />
                                        <KathyAvatar image="/avatars/kat.webp" alt="it's me!!" size="lg"/>
                                    </div>
                                    <p className="info-body">welcome to my corner of the internet~</p>
                                    <Timer />
                            </KathyCard>
                            {children}
                            </div>
                        </main>
                    </TRPCReactProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
