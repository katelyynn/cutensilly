import { KathyLinkBlock } from '../link_block/link_block';
import styles from './cosplay.module.css';
import { DateTime } from 'luxon';

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

export const Cosplay = ({item, full = true}: {item: CosplayProps, full?: boolean}) => {
    let max = item.media.type == 'MANGA' ? item.media.chapters : item.media.episodes;
    if (!max) max = 0;

    let progress = item.progress ? parseInt(item.progress) : 0;
    if (!item.progress) progress = max;

    let text = item.status + ' ' + progress;
    if (item.status == 'completed') {
        text = item.status;
    }

    return (
        <div className={`${styles.cosplay} ${full ? styles.full : styles.mini}`}>
            <div className={styles.cover}>
                <img src={item.media.coverImage.large} loading="lazy" />
            </div>
            <div className={styles.info}>
                <div className={styles.progress}>
                    <div className={styles.fill} style={{width: `${(progress / max) * 100}%`}} />
                </div>
                <div className={styles.title}>
                    {item.media.title.romaji}
                </div>
                <div className={styles.status}>
                    {text}
                </div>
                <div className={styles.time}>
                    {DateTime.fromSeconds(item.createdAt).toRelative()}
                </div>
            </div>
            <KathyLinkBlock link={item.siteUrl} type="a" />
        </div>
    )
}
