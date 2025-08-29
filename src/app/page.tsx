import Image from 'next/image';
import { KathyCard } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyClicky, KathyClickyGrid } from '~/app/_components/clicky/clicky';

import {MusClient} from "~/app/music.client";
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <KathyCard>
        <KathyAvatar image="/avatars/kat.jpg" alt="avatar for kathy" size="lg"/>
        <p><strong>hi! i'm <span className="kyuu">katelyn</span></strong> and this is my corner of the internet ^^</p>
        <p>i am a self-taught programmer mainly focusing on web development for the meantime. you may know me from my popular last.fm userscript, "bleh"? :3</p>
        <p>you can use the side rail to explore what this site has, here's <Link href={'/work'}>my project list</Link> for example !!</p>
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
