import Tip from "../tip/tip";
import styles from "./badge.module.css";

export const Badge = ({
    url,
    src,
    alt
}: {
    url: string,
    src: string,
    alt: string
}) => {
    return (
        <Tip content={alt} follow>
            <a className={styles.badge} href={url}>
                <img src={src} alt={alt} />
            </a>
        </Tip>
    );
}
