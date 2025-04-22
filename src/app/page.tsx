import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyClicky, KathyClickyGrid } from '~/app/_components/clicky/clicky';

import * as SolarIconSet from "solar-icon-set";

import { SiLastdotfm, SiDiscogs, SiGithub, SiOsu, SiRoblox, SiModrinth, SiSteam, SiX } from '@icons-pack/react-simple-icons';
import { KathyTile, KathyTileColumn, KathyTileGroup, KathyTileView } from './_components/tiles/tiles';
import { KathyIcon } from './_components/icon/icon';

export default async function Home() {
  return (
    <main>
      <KathyTileView>
        <KathyTile name="music" link="/mus" scheme="red">
          <KathyIcon state="" />
        </KathyTile>
        <KathyTile name="hai">
          <KathyIcon state="" />
        </KathyTile>
        <KathyTile name="Twitter" scheme="aqua">
          <SiX size={54} />
        </KathyTile>
        <KathyTile name="Rate Your Music" scheme="blue">
          <SolarIconSet.MusicNotes iconStyle="BoldDuotone" size={64} />
        </KathyTile>
        <KathyTile name="Last.fm" scheme="red">
          <SiLastdotfm size={54} />
        </KathyTile>
        <KathyTile name="Last.fm" scheme="orange">
          <SiLastdotfm size={54} />
        </KathyTile>
        <KathyTile name="hai" scheme="aqua" width={1} height={1}>
          <KathyIcon state="" />
        </KathyTile>
      </KathyTileView>
      <div className="hero">
        <KathyAvatar image="/avatars/kat.png" alt="avatar for kathy" size="xl" />
        <h2>hey im <span className="kyuu">kathy</span> :3</h2>
        <p className="big">silly lil girl who codes</p>
      </div>
      <KathyCardList>
        <KathyCard>
          <h4>find me anywhere</h4>
          <KathyClickyGrid>
            <KathyClicky colour="lastdotfm" link="https://last.fm/user/cutensilly" primary elem="a">
              <SiLastdotfm size={20} />
              <div className="info">
                <strong>last.fm</strong>
                cutensilly
              </div>
              <SolarIconSet.SquareArrowRightUp iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
            <KathyClicky colour="discogs" link="https://www.discogs.com/user/katenyaa/collection" primary elem="a">
              <SiDiscogs size={20} />
              <div className="info">
                <strong>discogs</strong>
                katenyaa
              </div>
              <SolarIconSet.SquareArrowRightUp iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
            <KathyClicky colour="github" link="https://github.com/katelyynn" primary elem="a">
              <SiGithub size={20} />
              <div className="info">
                <strong>github</strong>
                katelyynn
              </div>
              <SolarIconSet.SquareArrowRightUp iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
            <KathyClicky colour="rym" link="https://rateyourmusic.com/~kateshapedbox" primary elem="a">
              <SolarIconSet.MusicNotes iconStyle="BoldDuotone" size={20} />
              <div className="info">
                <strong>rate your music</strong>
                kateshapedbox
              </div>
              <SolarIconSet.SquareArrowRightUp iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
            <KathyClicky colour="modrinth" link="https://modrinth.com/user/kate" primary elem="a">
              <SiModrinth size={20} />
              <div className="info">
                <strong>modrinth</strong>
                kate
              </div>
              <SolarIconSet.SquareArrowRightUp iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
            <KathyClicky colour="roblox" link="https://www.roblox.com/users/5626179027/profile" primary elem="a">
              <SiRoblox size={20} />
              <div className="info">
                <strong>roblox</strong>
                kateshapedbox
              </div>
              <SolarIconSet.SquareArrowRightUp iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
            <KathyClicky colour="osu" link="https://osu.ppy.sh/u/katiecide" primary elem="a">
              <SiOsu size={20} />
              <div className="info">
                <strong>osu!</strong>
                katiecide
              </div>
              <SolarIconSet.SquareArrowRightUp iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
            <KathyClicky colour="steam" link="https://steamcommunity.com/id/cutensilly" primary elem="a">
              <SiSteam size={20} />
              <div className="info">
                <strong>steam</strong>
                kateshapedbox
              </div>
              <SolarIconSet.SquareArrowRightUp iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
          </KathyClickyGrid>
        </KathyCard>
        <KathyCard>
          <h4>quote from stella</h4>
          <KathyQuote hue={198} sat={1.6} lit={1.2} who={{
            avatar: '/avatars/stella.png',
              name: 'stella',
              link: 'https://cutensilly.org'
          }}>
              kathy, katie, kate, katelyn<br />wateva it is im gonna marry her
          </KathyQuote>
        </KathyCard>
      </KathyCardList>
    </main>
  );
}
