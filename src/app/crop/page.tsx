import {KathyCard} from '~/app/_components/card/card';
import {KathyClicky} from "~/app/_components/clicky/clicky";
import AvatarCropper from '../_components/crop/crop';

export default async function crop() {
    return (
        <>
            <KathyCard full>
                <AvatarCropper />
            </KathyCard>
        </>
    );
}
