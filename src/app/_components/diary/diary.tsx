import { IconNotebook } from "@tabler/icons-react";
import styles from "./diary.module.css";
import { KathyLinkBlock } from "../link_block/link_block";

export interface DiaryItemProps {
    id: string,
    title: string,
    date: string
}

export function DiaryList({
    entries
}: { entries: DiaryItemProps[] }) {
    return (
        <div className={styles.list}>
            {entries.map((entry, i) => (
                <DiaryItem id={entry.id} title={entry.title} date={entry.date} key={i} />
            ))}
        </div>
    )
}

export function DiaryItem({
    id,
    title,
    date
}: DiaryItemProps) {
    return (
        <div className={styles.item}>
            <div className={styles.iconbg}>
                <IconNotebook className={styles.icon} />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>{date}</div>
            </div>
            <KathyLinkBlock link={`/diary/${id}`} />
        </div>
    )
}
