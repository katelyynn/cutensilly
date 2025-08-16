import Image from 'next/image';
import { KathyCard } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyClicky, KathyClickyGrid } from '~/app/_components/clicky/clicky';

import {MusClient} from "~/app/music.client";

export default async function Home() {
  return (
    <main>
      <KathyCard>
        <KathyAvatar image="/avatars/kat.jpg" alt="avatar for kathy" size="lg"/>
        <h1>hey im <span className="kyuu">katelyn</span> :3</h1>
        <p>silly lil girl who codes</p>
        <div className="sep" />
        <KathyClickyGrid>
          <KathyClicky cloak="social" colour="lastdotfm" link="https://last.fm/user/clairedoll" primary elem="a">
            <Image src="/avatars/lastdotfm.png" alt="last.fm logo" width={16} height={16}/>
            <div className="info">
              <strong>last.fm</strong>
              clairedoll
            </div>
          </KathyClicky>
          <KathyClicky cloak="social" colour="discogs" link="https://www.discogs.com/user/longsocks/collection" primary elem="a">
            <Image src="/avatars/discogs.png" alt="discogs logo" width={16} height={16}/>
            <div className="info">
              <strong>discogs</strong>
              longsocks
            </div>
          </KathyClicky>
          <KathyClicky cloak="social" colour="github" link="https://github.com/katelyynn" primary elem="a">
            <Image src="/avatars/github.png" alt="github logo" width={16} height={16}/>
            <div className="info">
              <strong>github</strong>
              katelyynn
            </div>
          </KathyClicky>
          <KathyClicky cloak="social" colour="aoty" link="https://www.albumoftheyear.org/user/clairedoll/" primary elem="a">
            <Image src="/avatars/aoty.png" alt="AOTY logo" width={16} height={16}/>
            <div className="info">
              <strong>AOTY</strong>
              clairedoll
            </div>
          </KathyClicky>
          <KathyClicky cloak="social" colour="rym" link="https://rateyourmusic.com/~kateshapedbox" primary elem="a">
            <Image src="/avatars/rym.ico" alt="rym logo" width={16} height={16}/>
            <div className="info">
              <strong>rym</strong>
              kateshapedbox
            </div>
          </KathyClicky>
        </KathyClickyGrid>
        <div className="sep"/>
        <KathyQuote who={{
          avatar: '/avatars/stella.png',
            name: 'hazel',
            link: 'https://katelyn.moe'
        }}>
            kathy, katie, kate, katelyn<br />wateva it is im gonna marry her
        </KathyQuote>
        <div className="sep"/>
        <MusClient/>
      </KathyCard>
    </main>
  );
}
