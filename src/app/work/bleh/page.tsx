import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyPerk, KathyPerkList } from '~/app/_components/perk/perk';

import { Slides } from './slides.client';
import { KathyClicky, KathyClickyList } from '~/app/_components/clicky/clicky';

import * as SolarIconSet from "solar-icon-set";

export default async function Home() {
  return (
    <main className="wider colourful" style={{"--hue": 255}}>
      <div className="hero-left">
        <div className="info">
          <h2>Music stats<br />viewed from<br />a different lens</h2>
          <strong className="raise">Enter an alternate universe Last.fm redesigned from the ground up for usability.</strong>
          <KathyClickyList>
            <KathyClicky primary>
              Click to install
              <SolarIconSet.SquareArrowRight iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
            <KathyClicky primary colour="sponsor">
              <SolarIconSet.Heart iconStyle="Bold" size={20} />
              Become a sponsor
              <SolarIconSet.SquareArrowRight iconStyle="BoldDuotone" size={20} />
            </KathyClicky>
          </KathyClickyList>
        </div>
        <div className="image">
          <Slides />
        </div>
      </div>
      <div className="sub">
        <h3>whats in it for me?</h3>
        <p className="big">the following are visible in my two main projects: bleh and bwaa <sub><em>(soon)</em></sub>.</p>
        <KathyPerkList>
          <KathyPerk>
            <div className="perk-icon">
              <SolarIconSet.PaintRoller iconStyle="BoldDuotone" size={28} />
            </div>
            <h5>choose your look</h5>
            <p>choose your favourite colour along with a theme range from the lightest to the darkest.</p>
          </KathyPerk>
          <KathyPerk>
            <div className="perk-icon">
              <SolarIconSet.MedalStarCircle iconStyle="BoldDuotone" size={28} />
            </div>
            <h5>built from experience</h5>
            <p>thye layout, look, and feel is evolving over time to be the best possible.</p>
          </KathyPerk>
          <KathyPerk>
            <div className="perk-icon">
              <SolarIconSet.CloudDownload iconStyle="BoldDuotone" size={28} />
            </div>
            <h5>always up to date</h5>
            <p>the in-built updater helps provide you the latest features the same day they are released.</p>
          </KathyPerk>
        </KathyPerkList>
      </div>
      <KathyCardList>
        <KathyCard>
          <div className="full-split">
            <div className="info">
              <div className="perk-icon">
                <SolarIconSet.VinylRecord iconStyle="BoldDuotone" size={28} />
              </div>
              <h4>make your music smarter</h4>
              <p>show guest features as they were always intended, clutter-free.</p>
              <p>additionally help contribute to a growing capitalisation correction system for you and everyone else.</p>
            </div>
            <div className="image">
              <img src="/bleh/smart_music.png" alt="" />
            </div>
          </div>
        </KathyCard>
        <KathyCardList orient="h">
          <KathyCard>
          <div className="full-split">
              <div className="image solo">
                <img src="/bleh/gallery.jpg" alt="" />
              </div>
            </div>
          </KathyCard>
          <KathyCard>
            <div className="full-split">
              <div className="info">
                <div className="perk-icon">
                  <SolarIconSet.Gallery iconStyle="BoldDuotone" size={28} />
                </div>
                <h4>browse like never before</h4>
                <p>get a full look at gallery images while browsing, with an additional &apos;Expand&apos; option for the full resolution.</p>
                <p>use the save image feature to bookmark photos for another time, maybe your next profile layout?</p>
              </div>
            </div>
          </KathyCard>
        </KathyCardList>
        <KathyCard>
          <div className="full-split">
            <div className="info">
              <div className="perk-icon">
                <SolarIconSet.Star2 iconStyle="BoldDuotone" size={28} />
              </div>
              <h4>redesigned library</h4>
              <p>visualise your top artist plays in style with colours derived from a gradient.</p>
              <p>make photos pop by using their primary colour instead of a static colour.</p>
            </div>
            <div className="image">
              <img src="/bleh/smart_music.png" alt="" />
            </div>
          </div>
        </KathyCard>
      </KathyCardList>
      <KathyCard full>
        <div className="full-split">

          <div className="info">
            <h3>What&apos;s in it for me?</h3>
          </div>
        </div>
      </KathyCard>
    </main>
  );
}
