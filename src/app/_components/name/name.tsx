import Tip from "../tip/tip";
import styles from "./name.module.css";

import { IconPoint } from '@tabler/icons-react';

export const Name = () => {
    return (
        <Tip content="i go by many names at various times as i struggle with my identity ^~^ don't panic about saying the wrong name or something!!">
            <div className={styles.names}>
                <span className={`${styles.name} ${styles.primary}`}>yuzu</span>
                <IconPoint className={styles.point} />
                <span className={`${styles.name} ${styles.secondary}`}>it/she</span>
            </div>
        </Tip>
    );
}
