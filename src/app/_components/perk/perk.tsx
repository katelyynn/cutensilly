import React from 'react';
import style from "./perk.module.css";

interface KathyPerkProps {
    children: React.ReactNode
}

export const KathyPerk = ({
    children
}: KathyPerkProps) => {
    return (
        <div className={style.perk}>
            {children}
        </div>
    );
}

interface KathyPerkListProps {
    children: React.ReactNode
}

export const KathyPerkList = ({
    children
}: KathyPerkListProps) => {
    return (
        <div className={style.list}>
            {children}
        </div>
    );
}