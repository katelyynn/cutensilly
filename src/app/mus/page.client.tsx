'use client';

import {api} from '~/trpc/react';
import {KathyCard} from '~/app/_components/card/card';
import {KathyRecordList, KathyRecord} from '~/app/_components/record/record';

import type {Record} from '~/app/_components/record/record';
import {KathyClicky} from "~/app/_components/clicky/clicky";
import Image from "next/image";

export function MusClient() {
    const {data: collection, isLoading: collectionLoading} = api.discogs.getMusicCollection.useQuery(
        {username: "longsocks", page: 1},
        {
            staleTime: 60 * 60 * 1000, // Data becomes stale after 1 hour
            gcTime: 24 * 60 * 60 * 1000, // Cache persists for 24 hours
            refetchOnWindowFocus: false
        }
    );

    if (collectionLoading) {
        return <main>
            <KathyCard full>
                <div className="alert">loading...</div>
            </KathyCard>
        </main>;
    }

    if (!collection) {
        return <main>
            <KathyCard full>
                <div className="alert">no data available</div>
            </KathyCard>
        </main>;
    }

    return (
        <>
            <KathyCard full>
                <h1>physical collection</h1>
                <KathyClicky cloak="social" colour="discogs" link="https://www.discogs.com/user/longsocks/collection" primary elem="a">
                    <Image src="/avatars/discogs.png" alt="discogs logo" width={16} height={16}/>
                    <div className="info">
                        <strong>discogs</strong>
                        longsocks
                    </div>
                </KathyClicky>
                <div className="sep"/>
                <KathyRecordList>
                    {collection.collection.map((record: Record, i: number) => (
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
            </KathyCard>
        </>
    );
}
