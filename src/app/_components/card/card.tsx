import React from 'react';
import style from "./card.module.css";

interface KathyCardProps {
    full?: boolean,
    side?: boolean,
    classname?: string,
    children: React.ReactNode
}

export const KathyCard = ({
    full,
    side,
    classname,
    children
}: KathyCardProps) => {
    return (
        <div className={`card ${side ? 'side' : ''} ${(full) ? `full ${style.full}` : ''} ${classname ? classname : ''}`}>
            {children}
        </div>
    );
}

interface KathyCardListProps {
    orient?: 'h' | 'v',
    children: React.ReactNode
}

export const KathyCardList = ({
    orient = 'v',
    children
}: KathyCardListProps) => {
    return (
        <div className={`${style.list} ${style[`orient-${orient}`]}`}>
            {children}
        </div>
    );
}
