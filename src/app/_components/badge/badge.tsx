import Tip from "../tip/tip";
import styles from "./badge.module.css";

export const Badge = ({
    url,
    src,
    alt,
    iframe
}: {
    url?: string,
    src?: string,
    alt: string,
    iframe?: string
}) => {

    if (!url) {
        return (
            <a className={`${styles.badge} badge`}>
                <img src={src} alt={alt} />
            </a>
        );
    }

    if (iframe) {
        return (
            <Tip content={alt}>
                <a className={`${styles.badge} badge`} href={url}>
                    <iframe src={iframe} style={{border: "none"}} width="88" height="31" />
                </a>
            </Tip>
        );
    }

    return (
        <Tip content={alt}>
            <a className={`${styles.badge} badge`} href={url}>
                <img src={src} alt={alt} />
            </a>
        </Tip>
    );
}
