import { api } from "~/trpc/server";
import styles from './cosplay.module.css';
import { Cosplay, CosplayProps } from "./cosplay";

export async function Marine() {
    const data = await api.marine.getFeed();

    if (!data || !data.data) {
        return <div className="alert">no data available</div>;
    }

    return (
        <div className={styles.list}>
            {data.data.Page.activities.map((cosplay: CosplayProps) => (
                <Cosplay item={cosplay} />
            ))}
        </div>
    )
}
