import Image from 'next/image';
import { KathyCard } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyClicky, KathyClickyGrid } from '~/app/_components/clicky/clicky';

import {Mus} from "~/app/music";
import Link from 'next/link';
import Timer from './_components/time/time';
import { StatusAPI } from './_components/status/status_api';
import { Name } from './_components/name/name';
import { Marine } from './_components/marine/marine';

export default async function Home() {
  return (
    <>
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
        <p>i am a self-taught programmer mainly focusing on web dev for the meantime. you may know me from my popular <a href='https://bleh.katelyn.moe' target='_blank'>last.fm extension bleh</a></p>
        <p>you can use the side rail to explore to your heart's content, here's <Link href={'/work'}>my project list</Link> for example !!</p>
        <p>♪⋆.✮ my pronouns r <span className="kyuu">she/her/it</span> ⋆˚𝜗𝜚˚⋆</p>
      </KathyCard>
      <KathyCard classname="music">
        <Mus />
        <div className="sep" />
        <h3 className="status"><img src={'/book.png'} width="8" height="8" />watched/read recently</h3>
        <Marine />
        <div className="sep" />
        <StatusAPI />
      </KathyCard>
      <KathyQuote who={{
        avatar: '/avatars/stella.png',
          name: 'hazel, my lifelong angel ♡',
          link: 'https://katelyn.moe'
      }}>
          kathy, katie, kate, katelyn<br />wateva it is im gonna marry her
      </KathyQuote>
    </>
  );
}
