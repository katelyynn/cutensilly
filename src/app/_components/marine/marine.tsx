import { api } from "~/trpc/server";
import styles from './cosplay.module.css';
import { Cosplay, CosplayProps } from "./cosplay";

export async function Marine({
    full = false
}: {full?: boolean}) {
    const data = await api.marine.getFeed();

    if (!data || !data.data) {
        return <div className="alert">no data available</div>;
    }

    let activities = data.data.Page.activities;
    if (!full) activities = activities.slice(0, 1);

    return (
        <>
            <div className={styles.list}>
                {activities.map((cosplay: CosplayProps, key) => (
                    <Cosplay item={cosplay} key={key} full={full} />
                ))}
            </div>
        </>
    )
}
