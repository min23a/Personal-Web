import React, { memo } from "react";

const CaseBlock = memo(function CaseBlocks({
    title,
    items,
    className = "",
}) {
    if (!Array.isArray(items) || items.length === 0) return null;

    return (
        <section className={className}>
            <h2 className="text-xl font-semibold">{title}</h2>

            <div className="mt-4 space-y-6">
                {items.map((item, idx) => (
                    <div key={`${item.title}-${idx}`}>
                        <h3 className="text-base font-semibold">{item.title}</h3>
                        <p className="mt-2 leading-relaxed whitespace-pre-line">
                            {item.body}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default CaseBlock;
