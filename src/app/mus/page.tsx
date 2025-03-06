import Link from "next/link";
import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '~/app/_components/quote/quote';
import { KathyAvatar } from '~/app/_components/avatar/avatar';

export default async function Home() {
  return (
    <main>
      <h3>music <span className="kyuu">collection</span></h3>
      <KathyCardList>
        <KathyCard>
          <h4>physical collection</h4>
        </KathyCard>
        <KathyCard>
          <h4>recent listening</h4>
        </KathyCard>
      </KathyCardList>
    </main>
  );
}
