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
              years="2022—2025"
              image="https://bleh.katelyn.moe/img/bleh-void.jpg"
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
              title="florence"
              bio="the framework powering bleh (and soon bwaa)"
              source_url={{
                link: "https://github.com/katelyynn/florence",
                external: true
              }}
              years="2025"
            />
            <KathyWork
              title="lotus"
              bio="name correction system for my last.fm projects, bleh and bwaa"
              source_url={{
                link: "https://github.com/katelyynn/lotus",
                external: true
              }}
              years="2024—2025"
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
