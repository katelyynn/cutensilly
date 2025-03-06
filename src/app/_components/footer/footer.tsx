import React from 'react';
import style from "./footer.module.css";

import Link from 'next/link';

import * as SolarIconSet from "solar-icon-set";

export const KathyFooter = () => {
    return (
        <footer className={style.feet}>
            with <Link href="/sponsor"><SolarIconSet.Heart iconStyle="Bold" size={20} className="colourful accent" /></Link> by katelyn/kate/katie/kathy 2025
        </footer>
    );
}