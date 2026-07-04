import { KathyCard, KathyCardList } from '../_components/card/card';
import { Mus } from './mus';

export default function MusPage() {
    return (
        <KathyCardList>
            <KathyCard full>
                <h3>my music collection!!</h3>
                <Mus />
            </KathyCard>
        </KathyCardList>
    );
}
