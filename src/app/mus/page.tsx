import { Suspense } from 'react';
import { KathyCard, KathyCardList } from '../_components/card/card';
import { Mus } from './mus';

export default function MusPage() {
    return (
        <KathyCardList>
            <Suspense>
                <Mus />
            </Suspense>
        </KathyCardList>
    );
}
