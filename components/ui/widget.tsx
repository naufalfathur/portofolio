import { LiquidGlassFilters, LiquidGlassProvider } from '@gracefullight/liquid-glass';
import * as m from "motion/react-m"
import React from 'react'

const config = {
    frostBlur: "10px",
    // ... other options
};

export const WidgetCard = ({
    title,
    subtitle,
    bgImage,
    className = '',
    heightClass = 'h-56',
    offset = { x: 0, y: 0 },
    strength = 0.6,
    children,
}: {
    title: string;
    subtitle?: string;
    bgImage?: string;
    className?: string;
    heightClass?: string;
    offset?: { x: number; y: number };
    strength?: number;
    children?: React.ReactNode;
}) => {
    return (
        <LiquidGlassProvider value={config} >
            <m.div
                className={`relative ${heightClass} overflow-visible rounded-2xl bg-cover bg-center ${className}`}
                style={bgImage ? { backgroundImage: `url('${bgImage}')` } : { backgroundColor: '#DCDCDC' }}
                animate={{ x: offset.x * strength, y: offset.y * strength }}
                transition={{ type: 'spring', stiffness: 100, damping: 12 }}
            >
                <m.div
                    className="absolute -top-4 right-4 z-30"
                    animate={{ x: offset.x * (strength * 0.7), y: offset.y * (strength * 0.7) }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12 }}
                >
                    <div style={{ position: 'relative' }} className="glass-new">
                        <LiquidGlassFilters />
                        <div className="text-xs">{title}</div>
                    </div>

                </m.div>

                <div className="absolute inset-0 z-20 rounded-2xl overflow-hidden">
                    {subtitle ? (
                        <div className="absolute bottom-4 right-4 text-white/90 text-xs font-semibold drop-shadow">
                            {subtitle}
                        </div>
                    ) : null}
                    {children}
                </div>
            </m.div>
        </LiquidGlassProvider >
    );
};