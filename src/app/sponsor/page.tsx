import { KathyCard } from '~/app/_components/card/card';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyClicky } from '../_components/clicky/clicky';
import { KathyPerk, KathyPerkList } from '~/app/_components/perk/perk';

export default async function Home() {
  return (
    <>
      <KathyCard>
        <KathyAvatar image="/avatars/kat.webp" alt="avatar for kathy" size="lg"/>
        <h1>sponsor <span className="kyuu">katelyn</span> &lt;3</h1>
        <KathyClicky cloak="big" link="https://github.com/sponsors/katelyynn" elem="a">
          click to sponsor
        </KathyClicky>
        <div className="sep"/>
        <h3>what are the benefits?</h3>
        <p>the following are visible in both bleh and bwaa.</p>
        <KathyPerkList>
          <KathyPerk>
            <div className="perk-icon">
              <div className="famfamfam-silk bell" />
            </div>
            <h5>support future development</h5>
            <p>just one girl is widely responsible for these projects, so everything helps :3</p>
          </KathyPerk>
          <KathyPerk>
            <div className="perk-icon">
              <div className="famfamfam-silk ruby" />
            </div>
            <h5>rep a badge</h5>
            <p>receive both a sponsor heart badge and (if monthly) your own custom badge of your choosing</p>
          </KathyPerk>
          <KathyPerk>
            <div className="perk-icon">
              <div className="famfamfam-silk rainbow" />
            </div>
            <h5>painted in colour</h5>
            <p>if monthly, pick your favourite colour to display on your name wherever.</p>
          </KathyPerk>
        </KathyPerkList>
        <div className="sep"/>
        <h3>whats the difference?</h3>
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
            <th>
              <strong>default heart sponsor badge</strong>
              <p className="explain">a cute heart badge to represent your sponsorship :3</p>
            </th>
            <td>
              <div className="famfamfam-silk tick" />
            </td>
            <td>
              <div className="famfamfam-silk tick" />
            </td>
          </tr>
          <tr>
            <th>
              <strong>custom badge of your choosing</strong>
              <p className="explain">choose an icon from either <a href="https://tabler.io/icons" target="_blank">tabler</a> or <a href="https://lucide.dev" target="_blank">lucide</a>. cannot be a copy of a pre-existing last.fm or bleh/bwaa reserved badge. can be any text of your choosing as long as its not nsfw or hateful.</p>
            </th>
            <td>
              <div className="famfamfam-silk cross" />
            </td>
            <td>
              <div className="famfamfam-silk tick" />
            </td>
          </tr>
          <tr>
            <th>
              <strong>custom name colour</strong>
              <p className="explain">a combination of hsl which can be picked within bleh itself. this colour is also used for your badge.</p>
            </th>
            <td>
              <div className="famfamfam-silk cross" />
            </td>
            <td>
              <div className="famfamfam-silk tick" />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <KathyClicky link="https://github.com/sponsors/katelyynn?frequency=one-time" elem="a">
                $3
              </KathyClicky>
            </td>
            <td>
              <KathyClicky primary link="https://github.com/sponsors/katelyynn?frequency=monthly" elem="a">
                $3/mo
              </KathyClicky>
            </td>
          </tr>
          </tbody>
        </table>
      </KathyCard>
    </>
  );
}
