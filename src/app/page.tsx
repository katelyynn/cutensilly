import Image from 'next/image';
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
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
    <KathyCardList>
      <KathyCard>
        <p>i am a self-taught programmer mainly focusing on web dev for the meantime. you may know me from my popular <a href='https://bleh.katelyn.moe' target='_blank'>last.fm extension bleh</a> and similar things like that ^^</p>
        <KathyQuote who={{
            avatar: '/avatars/stella.png',
            name: 'hazel, my lifelong angel (sis) ♡',
            link: 'https://katelyn.moe'
        }}>
            kathy, katie, kate, katelyn<br />wateva it is im gonna marry her
        </KathyQuote>
      </KathyCard>
      <KathyCard classname="music">
        <Mus />
        <div className="sep" />
        <StatusAPI />
      </KathyCard>
    </KathyCardList>
  );
}
