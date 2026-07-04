import React from 'react';
import { Tooltip } from 'radix-ui';
import styles from "./tip.module.css";

export default function Tip({
    content,
    children
}: {
    content: React.ReactNode,
    children: React.ReactElement
}) {
    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className={styles.content}>
                        {content}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
