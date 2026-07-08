import styles from "./page.module.css";

export default function Tab() {
    return (
        <div className={styles.wrap}>
            <div className={styles.bg}>
                <img src={'./tab.webp'} className={styles.image} />
            </div>
            <div className={styles.container}>
                <input className={styles.input} placeholder="search" />
            </div>
        </div>
    )
}
