import "~/styles/globals.css";
import "~/styles/lucida/stylesheet.css";
import "famfamfam-silk/dist/sprite/famfamfam-silk.min.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { KathyNav } from '~/app/_components/nav/nav';
import { KathyFooter } from '~/app/_components/footer/footer';

import NextTopLoader from 'nextjs-toploader';

import { Hanken_Grotesk, Karla } from 'next/font/google';
import Link from 'next/link';

const karla = Hanken_Grotesk({
  subsets: ['latin'],
  weight: 'variable',
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
          <div className="top">
              <Link href={'/'}>
                  katelyn.moe
              </Link>
          </div>
          <main>
            <div className="content">
              {children}
            </div>
            <KathyNav />
          </main>
          <KathyFooter />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
