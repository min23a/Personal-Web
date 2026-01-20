import React from "react";
import Image from "next/image";
import Stars from "./Stars";
import { Heading, SubHeading } from "./Typograph";

/**
 * Reusable Card
 * - Responsive
 * - Renders only the fields that are provided
 *
 * Props:
 * - className?: string
 * - image?: { src: string; alt?: string; width?: number; height?: number; priority?: boolean }
 * - title?: string
 * - subtitle?: string
 * - description?: string
 * - stars?: number (0-5)
 * - date?: string
 * - meta?: string (small text line)
 * - tags?: string[]
 * - footerLeft?: React.ReactNode
 * - footerRight?: React.ReactNode
 * - href?: string (wrap card with link-like behavior)
 * - onClick?: () => void
 */
const Card = ({
    className = "",
    image,
    title,
    subtitle,
    description,
    stars,
    date,
    meta,
    tags = [],
    footertext,
    footerlink,
    href,
    onClick,
}) => {
    const Wrapper = ({ children }) => {
        const clickable = !!href || !!onClick;
        const common =
            "block w-full rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between h-full";

        if (href) {
            return (
                <a href={href} className={`${common} ${clickable ? "cursor-pointer" : ""}`}>
                    {children}
                </a>
            );
        }

        return (
            <div
                onClick={onClick}
                className={`${common} ${clickable ? "cursor-pointer" : ""}`}
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : undefined}
            >
                {children}
            </div>
        );
    };

    const hasHeader = title || subtitle || typeof stars === "number" || date || meta;
    const hasBody = description || (tags && tags.length > 0);
    const hasFooter = footertext || footerlink;

    return (
        <div className={`w-full ${className}`}>
            <Wrapper>
                {/* Image */}
                {image?.src ? (
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black/5">
                        <Image
                            src={image.src}
                            alt={image.alt || ""}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 600px, 500px"
                            className="object-cover"
                            priority={!!image.priority}
                        />
                    </div>
                ) : null}

                <div className="p-4 sm:p-5 flex flex-col grow justify-between">
                    {/* Header */}
                    {hasHeader ? (
                        <div className="flex flex-col items-start justify-between gap-3">
                            <div className="min-w-0">
                                {title ? (
                                    <Heading cls="scale-70  text-left">
                                        {title}
                                    </Heading>
                                ) : null}

                                {subtitle ? (
                                    <SubHeading>
                                        {subtitle}
                                    </SubHeading>
                                ) : null}

                                {meta ? (
                                    <p className="text-xs  mt-1 line-clamp-1">{meta}</p>
                                ) : null}
                            </div>

                            {/* Right side: stars + date */}
                            <div className="flex flex-col items-end gap-1 shrink-0">
                                {typeof stars === "number" ? (
                                    <Stars value={stars} />
                                ) : null}
                                {date ? (
                                    <span className="text-xs  whitespace-nowrap">
                                        {date}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    ) : null}

                    {/* Body */}
                    {hasBody ? (
                        <div className="mt-3">
                            {description ? (
                                <p className="text-sm  leading-relaxed line-clamp-3">
                                    {description}
                                </p>
                            ) : null}

                            {tags && tags.length > 0 ? (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {tags.map((t, i) => (
                                        <span
                                            key={`${t}-${i}`}
                                            className="text-xs px-2 py-1 rounded-full bg-black/5 border border-white"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    ) : null}

                </div>
                {/* Footer */}
                {hasFooter ? (
                    <div className="mt-4 p-4 border-t border-white hover:bg-indigo-500 transition-all duration-700 flex flex-col items-center justify-between gap-3">
                        {
                            footertext &&
                            <div className="min-w-0">{footertext}</div>
                        }
                        <div className="">{footerlink}</div>
                    </div>
                ) : null}
            </Wrapper>
        </div>
    );
};



export default Card;
