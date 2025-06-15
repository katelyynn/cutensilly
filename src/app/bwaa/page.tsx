import type {Metadata} from "next";
import {KathyCard} from '~/app/_components/card/card';

export const metadata: Metadata = {
    title: "katelyn.moe",
    description: "teeheee",
};

export default async function bwaa() {
    return (
        <main>
            <KathyCard>
                <img className="picture-frame" alt="bwaa" src="/bwaa-image.png" />
            </KathyCard>
        </main>
    );
}
