import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { KathyNav } from '~/app/_components/nav/nav';
import { KathyFooter } from '~/app/_components/footer/footer';

import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: "kathy",
  description: "teeheee",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>
          <NextTopLoader />
          {children}
          <KathyFooter />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
