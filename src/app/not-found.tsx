import { KathyCard, KathyCardList } from "~/app/_components/card/card";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <KathyCardList>
            <KathyCard>
                <div className={styles.wut}>
                    <div className={styles.top}>૮◞ ‸ ◟ ა</div>
                    <div className={styles.bottom}>nothing found..</div>
                </div>
            </KathyCard>
        </KathyCardList>
    );
}
