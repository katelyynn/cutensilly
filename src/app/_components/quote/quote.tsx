import React from 'react';
import style from "./quote.module.css";

import type { Identity } from '~/app/_components/identity';
import { KathyAvatar } from '~/app/_components/avatar/avatar';

interface KathyQuoteProps {
    who: Identity,
    children: React.ReactNode
}

export const KathyQuote = ({
    who,
    children
}: KathyQuoteProps) => {
    return (
        <div className={`colourful ${style.quote}`}>
            <blockquote className={style.content}>
                {children}
            </blockquote>
            <cite className={style.identity}>
                - {who.name}
            </cite>
        </div>
    );
}
