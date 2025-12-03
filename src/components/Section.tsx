import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
    id,
    className,
    children,
    fullWidth = false,
    ...props
}) => {
    return (
        <section
            id={id}
            className={twMerge(
                'py-16 md:py-24 relative overflow-hidden',
                className
            )}
            {...props}
        >
            <div className={clsx(
                'mx-auto px-4 sm:px-6 lg:px-8',
                fullWidth ? 'w-full max-w-none' : 'max-w-7xl'
            )}>
                {children}
            </div>
        </section>
    );
};
