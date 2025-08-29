import "~/styles/globals.css";
import "~/styles/lucida/stylesheet.css";
import "famfamfam-silk/dist/sprite/famfamfam-silk.min.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { KathyNav } from '~/app/_components/nav/nav';
import { KathyFooter } from '~/app/_components/footer/footer';

import NextTopLoader from 'nextjs-toploader';

import { Pangolin } from 'next/font/google';
import Link from 'next/link';

const pangolin = Pangolin({
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  title: "katelyn.moe",
  description: "teeheee",
  icons: [{ rel: "icon", url: "/avatars/kat.jpg" }],
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
    <html lang="en" className={pangolin.className}>
      <body>
        <TRPCReactProvider>
          <NextTopLoader />
          <div className="top">
            <Link href={'/'}>
              <img src={'/wordmark.png'} alt='katelyn!' />
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
