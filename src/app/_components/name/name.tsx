import Tip from "../tip/tip";
import styles from "./name.module.css";

import { IconPoint } from '@tabler/icons-react';

export const Name = () => {
    return (
        <Tip content="i struggle with my identity and connecting it to myself a lot, as such i tend to go by various nicknames to feel comfortable. dont stress about saying the wrong name, just ask me <3">
            <div className={styles.names}>
                <span className={`${styles.name} ${styles.primary}`}>yuzu</span>
                <IconPoint className={styles.point} />
                <span className={`${styles.name} ${styles.secondary}`}>it/she</span>
            </div>
        </Tip>
    );
}
