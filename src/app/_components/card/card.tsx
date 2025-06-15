import React from 'react';
import style from "./card.module.css";

interface KathyCardProps {
    full?: boolean,
    children: React.ReactNode
}

export const KathyCard = ({
    full,
    children
}: KathyCardProps) => {
    return (
        <div className={`${style.card} ${(full) ? style.full : ''}`}>
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
