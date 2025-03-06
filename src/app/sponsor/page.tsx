import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyClicky } from '../_components/clicky/clicky';
import { KathyPerk, KathyPerkList } from '~/app/_components/perk/perk';

import * as SolarIconSet from "solar-icon-set";

export default async function Home() {
  return (
    <main>
      <div className="hero">
        <KathyAvatar image="/avatars/kat.png" alt="avatar for kathy" size="xl" />
        <h2>sponsor <span className="kyuu">kathy</span> &lt;3</h2>
        <KathyClicky primary link="https://github.com/sponsors/katelyynn" elem="a">
          <SolarIconSet.Heart iconStyle="Bold" size={20} />
          click to sponsor
          <SolarIconSet.SquareArrowRightUp iconStyle="BoldDuotone" size={20} />
        </KathyClicky>
      </div>
      <div className="sub">
        <h3>what are the benefits?</h3>
        <p className="big">the following are visible in my two main projects: bleh and bwaa.</p>
        <KathyPerkList>
          <KathyPerk>
            <div className="perk-icon">
              <SolarIconSet.CalendarMark iconStyle="BoldDuotone" size={28} />
            </div>
            <h5>support future development</h5>
            <p>just one girl is widely responsible for these projects, so everything helps :3</p>
          </KathyPerk>
          <KathyPerk>
            <div className="perk-icon">
              <SolarIconSet.MedalStarCircle iconStyle="BoldDuotone" size={28} />
            </div>
            <h5>rep a badge</h5>
            <p>receive both a sponsor heart badge and (if monthly) your own custom badge of your choosing</p>
          </KathyPerk>
          <KathyPerk>
            <div className="perk-icon">
              <SolarIconSet.PaletteRound iconStyle="BoldDuotone" size={28} />
            </div>
            <h5>painted in colour</h5>
            <p>if monthly, pick your favourite colour to display on your name wherever.</p>
          </KathyPerk>
        </KathyPerkList>
      </div>
      <KathyCardList>
        <KathyCard>
          <h4>whats the difference?</h4>
          <table>
            <thead>
              <tr>
                <th>perk</th>
                <th>one-time</th>
                <th>monthly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>default heart sponsor badge</th>
                <td>
                  <SolarIconSet.CheckCircle iconStyle="BoldDuotone" size={28} className="colourful accent green" />
                </td>
                <td>
                  <SolarIconSet.CheckCircle iconStyle="BoldDuotone" size={28} className="colourful accent green" />
                </td>
              </tr>
              <tr>
                <th>custom badge of your choosing</th>
                <td>
                  <SolarIconSet.CloseCircle iconStyle="BoldDuotone" size={28} className="subtle" />
                </td>
                <td>
                  <SolarIconSet.CheckCircle iconStyle="BoldDuotone" size={28} className="colourful accent green" />
                </td>
              </tr>
              <tr>
                <th>custom name colour</th>
                <td>
                  <SolarIconSet.CloseCircle iconStyle="BoldDuotone" size={28} className="subtle" />
                </td>
                <td>
                  <SolarIconSet.CheckCircle iconStyle="BoldDuotone" size={28} className="colourful accent green" />
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <KathyClicky link="https://github.com/sponsors/katelyynn?frequency=one-time" elem="a">
                    choose
                  </KathyClicky>
                </td>
                <td>
                  <KathyClicky primary link="https://github.com/sponsors/katelyynn?frequency=monthly" elem="a">
                    choose
                  </KathyClicky>
                </td>
              </tr>
            </tbody>
          </table>
        </KathyCard>
      </KathyCardList>
    </main>
  );
}
