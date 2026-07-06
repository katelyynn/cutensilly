import { Suspense } from 'react';
import { KathyCard, KathyCardList } from '../_components/card/card';
import { Mus } from './mus';

export default function MusPage() {
    return (
        <KathyCardList>
            <KathyCard full>
                <h1>my music collection!!</h1>
                <Suspense>
                    <Mus />
                </Suspense>
            </KathyCard>
        </KathyCardList>
    );
}
