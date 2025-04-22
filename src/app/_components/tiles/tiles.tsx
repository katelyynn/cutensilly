import React from 'react';
import Link from 'next/link';
import style from "./tiles.module.css";

interface KathyTileProps {
    scheme?: 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple' | 'grey',
    name: string,
    width?: number,
    height?: number,
    children: React.ReactNode,
    link?: string
}

export const KathyTile = ({
    scheme = 'grey',
    name,
    width = 2,
    height = 2,
    children,
    link = ''
}: KathyTileProps) => {
    return (
        <Link className={`colourful ${style.tile} ${style[`scheme-${scheme}`]} ${style[`w-${width}`]} ${style[`h-${height}`]}`} href={link}>
            <div className={style.icon}>
                {children}
            </div>
            <div className={style.title}>
                <strong>{name}</strong>
            </div>
        </Link>
    );
}

interface KathyTileColumnProps {
    count?: number,
    children: React.ReactNode
}

export const KathyTileColumn = ({
    count = 2,
    children
}: KathyTileColumnProps) => {
    return (
        <div className={`${style.list} ${style[`count-${count}`]}`}>
            {children}
        </div>
    )
}

interface KathyTileGroupProps {
    children: React.ReactNode
}

export const KathyTileGroup = ({
    children
}: KathyTileGroupProps) => {
    return (
        <div className={style.group}>
            {children}
        </div>
    )
}

interface KathyTileViewProps {
    children: React.ReactNode
}

export const KathyTileView = ({
    children
}: KathyTileViewProps) => {
    return (
        <div className={style.view}>
            {children}
        </div>
    )
}