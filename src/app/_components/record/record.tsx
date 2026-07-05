import React from 'react';
import style from "./record.module.css";

import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyLinkBlock } from '../link_block/link_block';

interface Format {
    qty: string,
    descriptions: string[],
    name: string
}

interface Artist {
    id: number,
    name: string,
    join: string,
    resource_url: string,
    anv: string,
    tracks: string,
    role: string
}

export type Record = {
    id: number,
    title: string,
    year: number,
    avatar: string,
    formats: Format[],
    artists: Artist[]
}

export const KathyRecord = ({
    id,
    title,
    year,
    avatar,
    formats,
    artists
}: Record) => {
    const corrected = {
        artists: {
            'Rosé (2)': 'ROSÉ',
            'Charli XCX': 'Charli xcx',
            'My Bloody Valentine': 'my bloody valentine',
            'Glaive (4)': 'glaive',
            'Brakence': 'brakence'
        },
        names: {

        }
    }

    function replace_artist(name: string) {
        if (corrected.artists[name]) return corrected.artists[name];

        return name;
    }

    return (
        <li className={style.record}>
            <KathyAvatar image={avatar} alt={`image for ${title}`} size="lg" lazy />
            <div className={style.info}>
                <div className={style.title}>{title}</div>
                <div className={style.artists}>
                    {artists.map((artist: Artist, i: number) => (
                        <span className={style.artist} key={i}>{replace_artist(artist.name).replace(/\s*\([^)]*\)\s*\d*$/, '')}{(artists.length > 1) ? <span className={style.join}>{(artist.join == '&') ? ' ' : ''}{artist.join} </span> : ''}</span>
                    ))}
                </div>
                <div className={style.extras}>
                    <div className={style.year}>{(year > 0) ? year : '-'}</div>
                    {(formats[0]?.descriptions[0]) ? <div className={style.descriptor}>{formats[0].descriptions[0]}</div> : ''}
                    {formats[0] ? <div className={style.format} key={0}>({formats[0].name})</div> : ''}
                </div>
            </div>
            <KathyLinkBlock link={`https://www.discogs.com/release/${id}`} type="a" />
        </li>
    );
}

export const KathyRecordList = ({ children } : { children: React.ReactNode }) => {
    return (
        <ul className={style.list}>
            {children}
        </ul>
    )
}
