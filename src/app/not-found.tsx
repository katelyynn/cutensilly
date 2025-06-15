import {KathyCard} from "~/app/_components/card/card";

export default function NotFound() {
    return <main>
        <KathyCard>
            <img className="top" src="/404.png" alt="404" />
            <h1>404</h1>
            <h2>not found</h2>
        </KathyCard>
    </main>
}
