import React from "react";



const Stars = ({ value = 0 }) => {
    // Clamp between 0 and 5, allow decimals like 4.5
    const v = Math.max(0, Math.min(5, value));
    const full = Math.floor(v);
    const hasHalf = v - full >= 0.5;

    return (
        <div className="flex items-center gap-0.5" aria-label={`Rating ${v} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => {
                const idx = i + 1;
                const isFull = idx <= full;
                const isHalf = !isFull && hasHalf && idx === full + 1;

                return (
                    <span key={i} className="text-sm leading-none">
                        {isFull ? "★" : isHalf ? "⯪" : "☆"}
                    </span>
                );
            })}
        </div>
    );
};

export default Stars;