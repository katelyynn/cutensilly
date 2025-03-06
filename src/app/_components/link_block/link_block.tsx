import React from 'react';
import style from "./link_block.module.css";

import Link from "next/link";

interface KathyLinkBlockProps {
    link: string,
    type?: 'link' | 'a'
}

export const KathyLinkBlock = ({
    link,
    type
}: KathyLinkBlockProps) => {
    if (type == 'a') {
        return (
            <a href={link} target="_blank" className={style.link_block} />
        );
    }

    return (
        <Link href={link} className={style.link_block} />
    );
}