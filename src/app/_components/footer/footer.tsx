import React from 'react';
import style from "./footer.module.css";

import Link from 'next/link';

export const KathyFooter = () => {
    return (
        <footer className={style.feet}>
            with <Link style={{color: "#F21C06", fontWeight: "bold"}} href="/sponsor">love</Link> by katelyn 2025
        </footer>
    );
}
