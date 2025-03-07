import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyWork, KathyWorkList } from '../_components/work/work';

export default async function Home() {
  return (
    <main>
      <h3>my <span className="kyuu">work</span></h3>
      <KathyCardList>
        <KathyCard>
          <KathyWorkList>
            <KathyWork
              title="bleh"
              bio="an entire (cute) redesign for the music site last.fm"
              source_url={{
                link: "https://github.com/katelyynn/bleh",
                external: true
              }}
              view_url={{
                link: "/work/bleh"
              }}
              years="2022—2025"
            />
            <KathyWork
              title="bwaa"
              bio="brings last.fm back to 2012 while retaining all modern features"
              source_url={{
                link: "https://github.com/katelyynn/bwaa",
                external: true
              }}
              view_url={{
                link: "/work/bwaa"
              }}
              years="2024—2025"
            />
          </KathyWorkList>
        </KathyCard>
      </KathyCardList>
    </main>
  );
}
