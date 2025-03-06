import React from 'react';
import style from "./card.module.css";

interface KathyCardProps {
    children: React.ReactNode
}

export const KathyCard = ({
    children
}: KathyCardProps) => {
    return (
        <div className={style.card}>
            {children}
        </div>
    );
}

interface KathyCardListProps {
    children: React.ReactNode
}

export const KathyCardList = ({
    children
}: KathyCardListProps) => {
    return (
        <div className={style.list}>
            {children}
        </div>
    );
}