import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyWork, KathyWorkList } from '../_components/work/work';
import {KathyClicky} from "~/app/_components/clicky/clicky";
import Image from "next/image";

export default async function Home() {
  return (
    <KathyCardList>
        <KathyCard full>
          <h3>projects</h3>
          <KathyWorkList>
            <KathyWork
              title="bleh"
              bio="an entire (cute) redesign for the music site last.fm"
              source_url={{
                link: "https://github.com/katelyynn/bleh",
                external: true
              }}
              view_url={{
                link: "https://bleh.katelyn.moe"
              }}
              years="2022—2026"
              image="https://bleh.katelyn.moe/appearance.webp"
            />
            <KathyWork
              title="bwaa"
              bio="brings last.fm back to 2012 while retaining all modern features"
              source_url={{
                link: "https://github.com/katelyynn/bwaa",
                external: true
              }}
              view_url={{
                link: "/bwaa"
              }}
              years="2024—2025"
              image="bwaa-image.png"
            />
            <KathyWork
              title="lotus"
              bio="name correction system for my last.fm projects, bleh and bwaa"
              source_url={{
                link: "https://github.com/katelyynn/lotus",
                external: true
              }}
              years="2024—2026"
            />
            <KathyWork
              title="oracle"
              bio="helper to link last.fm pages to musicbrainz ids for bleh"
              source_url={{
                link: "https://github.com/katelyynn/oracle",
                external: true
              }}
              years="2025—2026"
            />
            <KathyWork
              title="clover"
              bio="all-in-one datapack/mod for pronouns & name colours in chat."
              source_url={{
                link: "https://github.com/katelyynn/florence",
                external: true
              }}
              years="2025-2026"
              image="https://cdn.modrinth.com/data/WG1hTtvW/images/c3574ffa271ce6daa5c3f0ae1f93e9cd7c743d13.png"
            />
            <KathyWork
              title="florence"
              bio="the framework powering bleh (and soon bwaa)"
              source_url={{
                link: "https://modrinth.com/datapack/clover",
                external: true
              }}
              years="2022-2026"
            />
            <KathyWork
              title="yuzuha"
              bio="simple avatar cropper site "
              source_url={{
                link: "https://github.com/katelyynn/yuzuha",
                external: true
              }}
              view_url={{
                link: "https://crop.katelyn.moe"
              }}
              years="2025"
              image="crop.jpg"
            />
          </KathyWorkList>
        </KathyCard>
    </KathyCardList>
  );
}
