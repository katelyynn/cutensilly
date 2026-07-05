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
        <Tooltip.Provider delayDuration={50} disableHoverableContent={true}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className={styles.content} sideOffset={4}>
                        {content}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
