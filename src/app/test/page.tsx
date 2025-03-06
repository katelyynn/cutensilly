import Link from "next/link";

import { KathyCard, KathyCardList } from '~/app/_components/card/card';
import { KathyQuote } from '../_components/quote/quote';

export default async function Home() {
    return (
        <main>
            <h1>header 1</h1>
            <h2>header 2</h2>
            <KathyCardList>
                <KathyCard>
                    <h3>header 3</h3>
                    <h4>header 4</h4>
                    <h5>header 5</h5>
                    <p>Dolorum eius fuga voluptatem quas quis culpa nulla. Occaecati iste natus nesciunt. Officia eius nemo at fuga. Velit fugiat repudiandae beatae ipsam adipisci. Qui alias fugiat laboriosam ipsum maiores. Aut cupiditate laborum perferendis dolorum quo.</p>
                    <p>Adipisci molestias quam sit ut velit vero corrupti et. Sunt quia laboriosam nisi quas laboriosam est molestias. Consequatur eos doloribus animi repudiandae et omnis quidem odit. Atque aut porro sed iste. Est et quidem aut nostrum ad omnis. Optio est nihil autem at saepe non dolorum dolore.</p>
                    <p>Nobis veniam a voluptas cum iusto. Sed non at quam provident illum ab. At adipisci nulla reprehenderit a qui voluptatem placeat sunt.</p>
                </KathyCard>
                <KathyCard>
                    <KathyQuote who={{
                        name: 'ino',
                        link: 'https://cutensilly.org'
                    }}>
                        kathy, katie, kate, katelyn<br />wateva it is im gonna marry her
                    </KathyQuote>
                    <KathyQuote who={{
                        avatar: '/avatars/kat.png',
                        name: 'kat',
                        link: 'https://cutensilly.org'
                    }}>
                        this is a really cool quote :3 Dolorum eius fuga voluptatem quas quis culpa nulla. Occaecati iste natus nesciunt. Officia eius nemo at fuga.
                    </KathyQuote>
                </KathyCard>
            </KathyCardList>
        </main>
    );
}
