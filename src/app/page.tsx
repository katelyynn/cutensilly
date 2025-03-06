import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';

export default async function Home() {
  return (
    <main>
      <div className="hero">
        <KathyAvatar image="/avatars/kat.png" alt="avatar for kathy" size="xl" />
        <h2>hey im <span className="kyuu">kathy</span> :3</h2>
        <p className="big">silly lil girl who codes</p>
      </div>
      <KathyCardList>
        <KathyCard>
          <h4>find me anywhere</h4>
        </KathyCard>
        <KathyCard>
          <h4>quote from my bf</h4>
          <KathyQuote hue={198} sat={1.6} lit={1.2} who={{
            avatar: '/avatars/ino.png',
              name: 'ino',
              link: 'https://cutensilly.org'
          }}>
              kathy, katie, kate, katelyn<br />wateva it is im gonna marry her
          </KathyQuote>
        </KathyCard>
      </KathyCardList>
    </main>
  );
}
