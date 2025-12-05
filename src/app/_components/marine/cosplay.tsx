import { kMaxLength } from 'node:buffer';
import styles from './cosplay.module.css';

export interface CosplayProps {
    siteUrl: string,
    status: string,
    progress: string | null,
    media: {
        coverImage: {
            large: string
        },
        title: {
            romaji: string
        },
        siteUrl: string,
        isAdult: boolean,
        type: string,
        chapters: number | null,
        episodes: number | null
    },
    id: number,
    createdAt: number
}

export const Cosplay = ({item}: {item: CosplayProps}) => {
    let max = item.media.type == 'MANGA' ? item.media.chapters : item.media.episodes;
    if (!max) max = 0;

    let progress = item.progress ? parseInt(item.progress) : 0;
    if (!item.progress) progress = max;

    return (
        <div className={styles.cosplay}>
            <div className={styles.cover}>
                <img src={item.media.coverImage.large} loading="lazy" />
            </div>
            <div className={styles.progress}>
                <div className={styles.fill} style={{width: `${(progress / max) * 100}%`}} />
            </div>
            <div className={styles.title}>
                {item.media.title.romaji}
            </div>
            <div className={styles.status}>
                {item.status} - {progress}
            </div>
            <div className={styles.date}>
                {item.createdAt}
            </div>
        </div>
    )
}
