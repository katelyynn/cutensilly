import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyClicky } from '../_components/clicky/clicky';
import { KathyPerk, KathyPerkBig, KathyPerkBigList, KathyPerkList } from '~/app/_components/perk/perk';

export default async function Home() {
  return (
    <KathyCardList>
      <KathyCard>
        <p>any sponsorship goes a long way in ensuring continued development, thank you!!</p>
        <div className="sep"/>
        <KathyClicky cloak="big" link="https://github.com/sponsors/katelyynn" elem="a">
          click to sponsor
        </KathyClicky>
        <div className="sep"/>
        <h3>what are the benefits?</h3>
        <KathyPerkBigList>
            <KathyPerkBig image={'/name.webp'} name="style your name with flair" available="bleh">
                sponsors can choose from a selection of custom fonts and custom font styles to show on your profile header
            </KathyPerkBig>
            <KathyPerkBig image={'/accent.webp'} name="painted in colour" available="bleh">
                sponsors can choose a custom profile accent that is displayed for all users when visiting your profile
            </KathyPerkBig>
            <KathyPerkBig image={'/custom_name.webp'} name="present yourself" available="bleh">
                sponsors can choose a custom display name shown on your profile
            </KathyPerkBig>
            <KathyPerkBig image={'/sponsor.webp'} name="rep a badge">
                acquire a default sponsorship badge to show your support and additionally (if sponsoring monthly!) a custom badge of your choosing
            </KathyPerkBig>
        </KathyPerkBigList>
        <div className="sep"/>
        <h3>whats the difference?</h3>
        <table>
          <thead>
          <tr>
            <th>perk</th>
            <th>once</th>
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
              <strong>display name</strong>
              <p className="explain">customisable in bleh profile settings</p>
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
              <strong>profile name font and styling</strong>
              <p className="explain">customisable in bleh profile settings</p>
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
              <strong>profile accent</strong>
              <p className="explain">customisable in bleh profile settings</p>
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
                once
              </KathyClicky>
            </td>
            <td>
              <KathyClicky primary link="https://github.com/sponsors/katelyynn?frequency=monthly" elem="a">
                monthly
              </KathyClicky>
            </td>
          </tr>
          </tbody>
        </table>
      </KathyCard>
    </KathyCardList>
  );
}
