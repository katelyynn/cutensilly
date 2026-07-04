import React from 'react';
import styles from "./status.module.css";
import { Status } from '~/server/api/routers/status';

export const StatusBlock = ({
    author,
    content,
    face,
    timeAgo
}: Status) => {
    return (
        <>
            <h3 className="status cafe">i’m thinking...</h3>
            <div className={styles.status}>
                <span className={styles.content}>{content}</span>
                <div className={styles.bottom}>
                    <span className={styles.emoji}>{face}</span>
                    <span className={styles.time}>{timeAgo}</span>
                </div>
            </div>
        </>
    );
}
