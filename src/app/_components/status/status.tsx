import React from 'react';
import styles from "./status.module.css";
import { Status } from '~/server/api/routers/status';
import { KathyLinkBlock } from '../link_block/link_block';

export const StatusBlock = ({
    author,
    content,
    face,
    timeAgo
}: Status) => {
    return (
        <>
            <h3>i’m thinking...</h3>
            <div className={styles.status}>
                <span className={styles.content}><span className={styles.quotation}>“</span>{content}<span className={styles.quotation}>”</span></span>
                <div className={styles.bottom}>
                    <span className={styles.emoji}>{face}</span>
                    <span className={styles.time}>{timeAgo}</span>
                </div>
                <KathyLinkBlock link={`https://status.cafe/users/${author}`} />
            </div>
        </>
    );
}
