import React from 'react';
import style from "./work.module.css";

import Image from 'next/image';
import { KathyClicky, KathyClickyList } from '../clicky/clicky';

interface KathyWorkProps {
    image?: string,
    title: string,
    bio: string,
    view_url?: WorkLink,
    source_url?: WorkLink,
    years: string
}

interface WorkLink {
    link: string,
    external?: boolean
}

export const KathyWork = ({
    image,
    title,
    bio,
    view_url,
    source_url,
    years
}: KathyWorkProps) => {
    return (
        <li className={style.work}>
            <div className={style.image}>
                {image ? <Image src={image} alt={title} /> : ''}
            </div>
            <div className={style.info}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.bio}>{bio}</p>
                <p className={style.years}>{years}</p>
                <KathyClickyList>
                    {view_url ?
                    <KathyClicky primary link={view_url.link} elem={view_url.external ? 'a' : 'link'}>
                        view
                    </KathyClicky>
                    : ''}
                    {source_url ?
                    <KathyClicky link={source_url.link} elem={source_url.external ? 'a' : 'link'}>
                        source
                    </KathyClicky>
                    : ''}
                </KathyClickyList>
            </div>
        </li>
    );
}

export const KathyWorkList = ({ children } : { children: React.ReactNode }) => {
    return (
        <ul className={style.list}>
            {children}
        </ul>
    );
}
