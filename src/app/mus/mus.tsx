import {api} from '~/trpc/server';
import {KathyRecordList, KathyRecord} from '~/app/_components/record/record';

import type {RecordItem} from '~/app/_components/record/record';
import { KathyCard } from '../_components/card/card';

export async function Mus() {
    const collection = await api.discogs.getMusicCollection(
        {username: "longsocks", page: 1}
    );

    if (!collection) {
        return <div className="alert">no data available</div>;
    }

    const cds = collection.collection.filter(record => record.cd == true);
    const vinyls = collection.collection.filter(record => record.cd == false);

    return (
        <>
            <KathyCard>
                <h1>vinyls</h1>
                <KathyRecordList>
                    {vinyls.map((record: RecordItem, i: number) => (
                        <KathyRecord
                            key={i}
                            id={record.id}
                            title={record.title}
                            year={record.year}
                            avatar={record.avatar}
                            formats={record.formats}
                            artists={record.artists}
                            cd={record.cd}
                        />
                    ))}
                </KathyRecordList>
            </KathyCard>
            <KathyCard>
                <h1>cds</h1>
                <KathyRecordList>
                    {cds.map((record: RecordItem, i: number) => (
                        <KathyRecord
                            key={i}
                            id={record.id}
                            title={record.title}
                            year={record.year}
                            avatar={record.avatar}
                            formats={record.formats}
                            artists={record.artists}
                            cd={record.cd}
                        />
                    ))}
                </KathyRecordList>
            </KathyCard>
        </>
    );
}
