import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyClicky, KathyClickyGrid } from '~/app/_components/clicky/clicky';

import { SiLastdotfm, SiDiscogs, SiGithub, SiOsu, SiRoblox, SiModrinth, SiSteam } from '@icons-pack/react-simple-icons';
import {IconCircleArrowUpRightFilled, IconDiscFilled} from "@tabler/icons-react";

export default async function Home() {
  return (
    <main>
      <KathyCard>
        <KathyAvatar image="/avatars/kat.png" alt="avatar for kathy" size="lg"/>
        <h1>hey im <span className="kyuu">katelyn</span> :3</h1>
        <p>silly lil girl who codes</p>
        <div className="sep" />
        <KathyClickyGrid>
          <KathyClicky cloak="social" colour="lastdotfm" link="https://last.fm/user/hyacines" primary elem="a">
            <SiLastdotfm size={16}/>
            <div className="info">
              <strong>last.fm</strong>
              hyacines
            </div>
          </KathyClicky>
          <KathyClicky cloak="social" colour="discogs" link="https://www.discogs.com/user/hyacine/collection" primary elem="a">
            <SiDiscogs size={16}/>
            <div className="info">
              <strong>discogs</strong>
              hyacine
            </div>
          </KathyClicky>
          <KathyClicky cloak="social" colour="github" link="https://github.com/katelyynn" primary elem="a">
            <SiGithub size={16}/>
            <div className="info">
              <strong>github</strong>
              katelyynn
            </div>
          </KathyClicky>
          <KathyClicky cloak="social" colour="rym" link="https://www.albumoftheyear.org/user/lynkat/" primary elem="a">
            <IconDiscFilled size={16}/>
            <div className="info">
              <strong>AOTY</strong>
              lynkat
            </div>
          </KathyClicky>
          <KathyClicky cloak="social" colour="rym" link="https://rateyourmusic.com/~kateshapedbox" primary elem="a">
            <IconDiscFilled size={16}/>
            <div className="info">
              <strong>rate your music</strong>
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
      </KathyCard>
    </main>
  );
}
