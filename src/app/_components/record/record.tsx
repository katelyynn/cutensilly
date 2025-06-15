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
    return (
        <li className={style.record}>
            <KathyAvatar image={avatar} alt={`image for ${title}`} size="lg" />
            <div className={style.info}>
                {formats[0] ? <div className={`colourful ${style.format} ${style[`format-${formats[0].name.toLowerCase().replaceAll(' ', '')}`]}`} key={0}>{formats[0].name}</div> : ''}
                <div className={style.title}>{title}</div>
                <div className={style.artists}>
                    {artists.map((artist: Artist, i: number) => (
                        <span className={style.artist} key={i}>{artist.name}{(artists.length > 1) ? <span className={style.join}>{(artist.join == '&') ? ' ' : ''}{artist.join} </span> : ''}</span>
                    ))}
                </div>
                <div className={style.extras}>
                    <div className={style.year}>{(year > 0) ? year : '-'}</div>
                    {(formats[0]?.descriptions[0]) ? <div className={style.descriptor}>{formats[0].descriptions[0]}</div> : ''}
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
