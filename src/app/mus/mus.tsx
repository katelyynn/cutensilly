import {api} from '~/trpc/server';
import {KathyRecordList, KathyRecord} from '~/app/_components/record/record';

import type {RecordItem} from '~/app/_components/record/record';

export async function Mus() {
    const collection = await api.discogs.getMusicCollection(
        {username: "longsocks", page: 1}
    );

    if (!collection) {
        return <div className="alert">no data available</div>;
    }

    return (
        <KathyRecordList>
            {collection.collection.map((record: RecordItem, i: number) => (
                <KathyRecord
                    key={i}
                    id={record.id}
                    title={record.title}
                    year={record.year}
                    avatar={record.avatar}
                    formats={record.formats}
                    artists={record.artists}
                />
            ))}
        </KathyRecordList>
    );
}
