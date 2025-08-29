import Image from 'next/image';
import { KathyCard } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyClicky, KathyClickyGrid } from '~/app/_components/clicky/clicky';

import {MusClient} from "~/app/music.client";

export default async function Home() {
  return (
    <>
      <KathyCard>
        <KathyAvatar image="/avatars/kat.jpg" alt="avatar for kathy" size="lg"/>
        <h1>hey im <span className="kyuu">katelyn</span> :3</h1>
        <p>silly lil girl who codes</p>
        <div className="sep"/>
        <KathyQuote who={{
          avatar: '/avatars/stella.png',
            name: 'hazel',
            link: 'https://katelyn.moe'
        }}>
            kathy, katie, kate, katelyn<br />wateva it is im gonna marry her
        </KathyQuote>
      </KathyCard>
      <KathyCard classname="music">
        <h3>i'm currently listening to</h3>
        <MusClient/>
      </KathyCard>
    </>
  );
}
