import React from 'react';
import style from "./footer.module.css";

import Link from 'next/link';

import * as SolarIconSet from "solar-icon-set";
import {IconHeartFilled} from "@tabler/icons-react";

export const KathyFooter = () => {
    return (
        <footer className={style.feet}>
            with <Link href="/sponsor"><IconHeartFilled size={20} className="colourful accent" /></Link> by katelyn/kate/katie/kathy 2025
        </footer>
    );
}
