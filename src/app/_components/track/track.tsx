import React from 'react';
import style from "./track.module.css";

import { KathyAvatar } from '~/app/_components/avatar/avatar';
import { KathyLinkBlock } from '../link_block/link_block';
import { KathyClicky } from '../clicky/clicky';

import * as SolarIconSet from "solar-icon-set";

export type Track = {
    avatar?: string,
    title: string,
    artist: {
        title: string,
        link: string
    },
    album?: {
        title: string,
        link: string
    },
    time?: string,
    love?: boolean,
    active?: boolean,
    link: string
}

export const KathyTrack = ({
    avatar,
    title,
    artist,
    album,
    time,
    love,
    active,
    link
}: Track) => {
    return (
        <li className={`${style.track} ${(active) ? style.active : ''}`}>
            <KathyAvatar image={avatar} alt={(album) ? `avatar for ${album.title}` : `avatar for ${title}`} size={(active) ? 'nm' : 'md'} />
            <div className={style.info}>
                <div className={style.title}>{title}</div>
                {(artist) ? <div className={style.artist}><a href={`${artist.link}`}>{artist.title}</a></div> : null}
                {(active && album) ? <div className={style.album}><a href={`${artist.link}/${album.link}`}>{album.title}</a></div> : null}
            </div>
            {(time) ? <div className={style.time}>{time}</div> : ''}
            <KathyClicky primary={active} cloak="track" icon>
                <SolarIconSet.Heart iconStyle={(active) ? "Bold" : "BoldDuotone"} size={20} />
            </KathyClicky>
            <KathyLinkBlock link={`${link}`} type="a" />
        </li>
    );
}

export const KathyTrackList = ({ children } : { children: React.ReactNode }) => {
    return (
        <ul className={style.list}>
            {children}
        </ul>
    )
}