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

interface KathyPerkBigListProps {
    children: React.ReactNode
}

export const KathyPerkBigList = ({
    children
}: KathyPerkBigListProps) => {
    return (
        <div className={style.list_big}>
            {children}
        </div>
    );
}

interface KathyPerkBigProps {
    image: string,
    name: string,
    available?: string,
    children: React.ReactNode
}

export const KathyPerkBig = ({
    image,
    name,
    available = 'both',
    children
}: KathyPerkBigProps) => {
    return (
        <div className={style.perk_big}>
            <img src={image} />
            <strong>{name}{available != 'both' ? <i>({available} only)</i> : ''}</strong>
            <p>{children}</p>
        </div>
    );
}
