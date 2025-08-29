import {KathyCard} from "~/app/_components/card/card";

export default function NotFound() {
    return <main>
        <KathyCard>
            <img className="top404" src="/404.png" alt="404" />
            <h1>404 not found</h1>
        </KathyCard>
    </main>
}
