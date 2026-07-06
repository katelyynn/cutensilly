import Tip from "../tip/tip";
import styles from "./badge.module.css";

interface BadgeProps {
    url?: string,
    src?: string,
    alt: string,
    iframe?: string
}

export const Badge = ({
    url,
    src,
    alt,
    iframe
}: BadgeProps) => {
    let inner;

    if (src) {
        inner = (
            <div className={styles.inner}>
                <img src={src} alt={alt} />
            </div>
        )
    } else if (iframe) {
        inner = (
            <div className={styles.inner}>
                <iframe src={iframe} style={{border: "none"}} width="88" height="31" />
            </div>
        )
    }

    if (!url) {
        return (
            <a className={`${styles.badge} badge`}>
                {inner}
            </a>
        );
    }

    return (
        <Tip content={alt}>
            <a className={`${styles.badge} badge`} href={url}>
                {inner}
            </a>
        </Tip>
    );
}
