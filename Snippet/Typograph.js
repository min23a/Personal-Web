import React from 'react'
import { useId, useMemo, useState } from 'react'

export const SubHeading = ({ children, id, cls }) => {
    return (
        <>
            <h3 id={id ? id : ""} className={`font-bold text-left text-[16px] capitalise my-3 ${cls}`}>{children}</h3>
        </>
    )
}

export const Heading = ({ children, id, cls, hr }) => {
    return (
        <>
            <h1 id={id ? id : ""} className={"font-bold text-center text-[20px] uppercase my-6 " + cls}>{children}</h1>
            {hr ? <hr /> : null}
        </>
    )
}

export const CTA = ({ children, action, cls }) => {
    return (
        <button onClick={action} className={`bg-secondary text-white font-bold px-6 py-3 rounded-md hover:bg-secondary transition ${cls}`}>
            {children}
        </button>
    )
}



/**
 * ReadMore (line-clamp based)
 *
 * Props:
 * - children: text/content
 * - lines: number (default 3)
 * - moreText: string (default "Read more")
 * - lessText: string (default "Read less")
 * - className: wrapper classes
 * - contentClassName: content classes
 * - buttonClassName: button classes
 * - defaultOpen: boolean
 *
 * Works in Next.js Pages Router.
 * Uses CSS line-clamp (Tailwind line-clamp plugin recommended).
 */


export const ReadMore = ({
    children,
    lines = 3,
    moreText = "Read more",
    lessText = "Read less",
    className = "",
    contentClassName = "",
    buttonClassName = "",
    defaultOpen = false,
}) => {
    const id = useId();
    const [open, setOpen] = useState(defaultOpen);
    const showButton = useMemo(() => {
        if (typeof children !== "string") return false;
        const lineBreaks = children.split("\n").length - 1;
        const approxLines = Math.ceil((children.length / 100) + lineBreaks);
        return approxLines > lines;
    }, [children, lines]);

    const clampStyle = useMemo(() => {
        if (open) return {};
        return {
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: String(lines),
            overflow: "hidden",
        };
    }, [open, lines]);

    return (
        <div className={className}>
            <p
                id={id}
                style={clampStyle}
                className={contentClassName}
                aria-expanded={open}
            >
                {children}
            </p>

            {showButton && (
                <button
                    type="button"
                    className={[
                        "mt-2 inline-flex items-center gap-2 underline underline-offset-4",
                        "text-sm opacity-90 hover:opacity-100",
                        buttonClassName,
                    ].join(" ")}
                    aria-controls={id}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? lessText : moreText}
                </button>
            )}
        </div>
    );
}
