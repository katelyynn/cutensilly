import { KathyCard, KathyCardList } from "~/app/_components/card/card";
import NotFound from "~/app/not-found";
import { getDiaryEntry } from "~/lib/diary";
import styles from "./page.module.css";
import Markdown from 'react-markdown';

export default async function Diary({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const entry = getDiaryEntry(id);

    if (!entry || !entry.data) {
        return NotFound();
    }

    return (
        <KathyCardList>
            <KathyCard>
                <p className={styles.date}>{entry.data.date}</p>
                <h1 className={styles.title}>{entry.data.title}</h1>
                <div className={styles.content}>
                    <Markdown>{entry.content}</Markdown>
                </div>
                <div className={styles.credit}>
                    ~ yuzu/katelyn
                </div>
            </KathyCard>
        </KathyCardList>
    )
}
