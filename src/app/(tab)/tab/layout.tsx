import "~/styles/globals.css";
import "~/styles/lucida/stylesheet.css";
import "famfamfam-silk/dist/sprite/famfamfam-silk.min.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import NextTopLoader from 'nextjs-toploader';

import { Bricolage_Grotesque, Instrument_Serif } from 'next/font/google';

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
                        {children}
                    </TRPCReactProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
