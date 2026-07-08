import {KathyCard, KathyCardList} from '~/app/_components/card/card';
import {KathyClicky} from "~/app/_components/clicky/clicky";
import AvatarCropper from '~/app/_components/crop/crop';

export default async function crop() {
    return (
        <KathyCardList>
            <KathyCard full>
                <AvatarCropper />
            </KathyCard>
        </KathyCardList>
    );
}
