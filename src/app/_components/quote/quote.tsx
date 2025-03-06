import React from 'react';
import style from "./quote.module.css";

import type { Identity } from '~/app/_components/identity';
import { KathyAvatar } from '../avatar/avatar';

interface KathyQuoteProps {
    who: Identity,
    hue?: number, sat?: number, lit?: number,
    children: React.ReactNode
}

export const KathyQuote = ({
    who,
    hue, sat, lit,
    children
}: KathyQuoteProps) => {
    return (
        <div className={`colourful ${style.quote}`} style={{'--hue': hue, '--sat': sat, '--lit': lit}}>
            <blockquote className={style.content}>
                {children}
            </blockquote>
            <cite className={style.identity}>
                <a className={style.name} href={who.link} target="_blank">{who.name}</a>
                <KathyAvatar image={who.avatar} alt={`avatar for ${who.name}`} size="sm" link={who.link} link_type="a" />
            </cite>
        </div>
    );
}