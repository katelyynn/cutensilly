import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyWork, KathyWorkList } from '../_components/work/work';
import {KathyClicky} from "~/app/_components/clicky/clicky";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
        <KathyCard full>
          <h1>library</h1>
            <KathyClicky cloak="social" colour="github" link="https://github.com/katelyynn" primary elem="a">
                <Image src="/avatars/github.png" alt="github logo" width={16} height={16}/>
                <div className="info">
                    <strong>github</strong>
                    katelyynn
                </div>
            </KathyClicky>
            <div className="sep" />
          <KathyWorkList>
            <KathyWork
              title="bleh"
              bio="an entire (cute) redesign for the music site last.fm"
              source_url={{
                link: "https://github.com/katelyynn/bleh",
                external: true
              }}
              view_url={{
                link: "/bleh"
              }}
              years="2022—2025"
              image="bleh-ash.jpg"
            />
            <KathyWork
              title="bwaa"
              bio="brings last.fm back to 2012 while retaining all modern features"
              source_url={{
                link: "https://github.com/katelyynn/bwaa",
                external: true
              }}
              view_url={{
                link: "https://bleh.katelyn.moe"
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
              view_url={{
                link: "/lotus"
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
            />
          </KathyWorkList>
        </KathyCard>
    </main>
  );
}
