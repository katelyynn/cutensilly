import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';

export default async function Home() {
  return (
    <main>
      <h3>my <span className="kyuu">work</span></h3>
      <KathyCardList>
        <KathyCard>
          <h4>find me anywhere</h4>
        </KathyCard>
      </KathyCardList>
    </main>
  );
}
