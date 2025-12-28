import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Slider({
    children,
    index,
    onIndexChange,
    loop = false,
    arrows = true,
    dots = false,
    thumbnails = false,
    numbers = false,
    thumbRenderer,
    className = "",
    slideClassName = "",
    autoplay = false,
    autoplayDelay = 3500,
    pauseOnHover = true,
    pauseOnInteraction = true,
    resumeDelay = 2500,
}) {
    const slides = useMemo(() => React.Children.toArray(children), [children]);
    const count = slides.length;

    const [internalIndex, setInternalIndex] = useState(0);
    const isControlled = typeof index === "number" && typeof onIndexChange === "function";
    const activeIndex = isControlled ? index : internalIndex;

    const setIndex = (next) => {
        const clamped = clampIndex(next, count, loop);
        if (clamped === activeIndex) return;
        if (isControlled) onIndexChange(clamped);
        else setInternalIndex(clamped);
    };

    const canPrev = loop || activeIndex > 0;
    const canNext = loop || activeIndex < count - 1;

    // ===== Keyboard =====
    const rootRef = useRef(null);
    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;

        const onKey = (e) => {
            if (!el.contains(document.activeElement)) return;

            if (e.key === "ArrowLeft") {
                e.preventDefault();
                if (canPrev) setIndex(activeIndex - 1);
            }
            if (e.key === "ArrowRight") {
                e.preventDefault();
                if (canNext) setIndex(activeIndex + 1);
            }
        };

        window.addEventListener("keydown", onKey, { passive: false });
        return () => window.removeEventListener("keydown", onKey);
    }, [activeIndex, canPrev, canNext, count, loop]);

    // ===== Touch swipe =====
    const startX = useRef(null);
    const deltaX = useRef(0);

    const pauseUntilRef = useRef(0); // timestamp until which autoplay is paused after interaction
    const isHoveringRef = useRef(false);
    const isTouchingRef = useRef(false);

    const pauseFor = (ms) => {
        if (!pauseOnInteraction) return;
        pauseUntilRef.current = Date.now() + ms;
    };

    const onTouchStart = (e) => {
        isTouchingRef.current = true;
        startX.current = e.touches[0].clientX;
        deltaX.current = 0;
        pauseFor(resumeDelay);
    };

    const onTouchMove = (e) => {
        if (startX.current == null) return;
        deltaX.current = e.touches[0].clientX - startX.current;
    };

    const onTouchEnd = () => {
        isTouchingRef.current = false;

        const dx = deltaX.current;
        startX.current = null;
        deltaX.current = 0;

        if (Math.abs(dx) < 40) return;

        if (dx > 0) {
            if (canPrev) setIndex(activeIndex - 1);
        } else {
            if (canNext) setIndex(activeIndex + 1);
        }

        pauseFor(resumeDelay);
    };

    // ===== Autoplay =====
    const intervalRef = useRef(null);

    const clearAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const shouldAutoplayTick = () => {
        if (!autoplay) return false;
        if (count <= 1) return false;
        if (!loop && !canNext) return false; // stop at end if not looping
        if (pauseOnHover && isHoveringRef.current) return false;
        if (pauseOnInteraction && Date.now() < pauseUntilRef.current) return false;
        if (document.visibilityState === "hidden") return false;
        if (isTouchingRef.current) return false;
        return true;
    };

    useEffect(() => {
        clearAutoplay();

        if (!autoplay || count <= 1) return;

        intervalRef.current = setInterval(() => {
            if (!shouldAutoplayTick()) return;
            setIndex(activeIndex + 1);
        }, Math.max(800, autoplayDelay)); // guard against too-fast intervals

        const onVis = () => {
            // pause automatically when tab is hidden, resume when visible (interval continues but tick is blocked)
            if (document.visibilityState === "hidden") pauseFor(resumeDelay);
        };
        document.addEventListener("visibilitychange", onVis);

        return () => {
            document.removeEventListener("visibilitychange", onVis);
            clearAutoplay();
        };
        // re-create interval when these change
    }, [autoplay, autoplayDelay, count, loop, activeIndex, canNext, pauseOnHover, pauseOnInteraction, resumeDelay]);

    // pause on hover
    const onMouseEnter = () => {
        if (!pauseOnHover) return;
        isHoveringRef.current = true;
    };
    const onMouseLeave = () => {
        if (!pauseOnHover) return;
        isHoveringRef.current = false;
        pauseFor(300); // tiny buffer to avoid immediate tick
    };

    const onClickPrev = () => {
        pauseFor(resumeDelay);
        setIndex(activeIndex - 1);
    };
    const onClickNext = () => {
        pauseFor(resumeDelay);
        setIndex(activeIndex + 1);
    };
    const onGoTo = (i) => {
        pauseFor(resumeDelay);
        setIndex(i);
    };

    if (count === 0) return null;

    return (
        <div
            ref={rootRef}
            className={`w-full ${className}`}
            aria-roledescription="carousel"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="relative w-[80%] m-auto">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out will-change-transform"
                        style={{ transform: `translate3d(${-activeIndex * 100}%, 0, 0)` }}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className={`min-w-full slide-cont flex-shrink-0 ${slideClassName}`}
                                aria-hidden={i !== activeIndex}
                            >
                                {slide}
                            </div>
                        ))}
                    </div>
                </div>

                {arrows && count > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={onClickPrev}
                            disabled={!canPrev}
                            className={`absolute left-[-5%] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full backdrop-blur flex items-center justify-center shadow
              ${!canPrev ? "opacity-40 cursor-not-allowed" : ""}`}
                            aria-label="Previous slide"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <button
                            type="button"
                            onClick={onClickNext}
                            disabled={!canNext}
                            className={`absolute right-[-5%] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full backdrop-blur flex items-center justify-center shadow
              ${!canNext ? "opacity-40 cursor-not-allowed" : ""}`}
                            aria-label="Next slide"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </>
                )}

                {numbers && count > 1 && (
                    <div className="absolute right-3 bottom-3 rounded-full bg-black/60 text-white text-sm px-3 py-1">
                        {activeIndex + 1} / {count}
                    </div>
                )}
            </div>

            {dots && count > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: count }).map((_, i) => {
                        const active = i === activeIndex;
                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => onGoTo(i)}
                                className={`h-2.5 rounded-full transition-all ${active ? "w-8 bg-black" : "w-2.5 bg-black/30 hover:bg-black/50"
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                                aria-current={active ? "true" : "false"}
                            />
                        );
                    })}
                </div>
            )}

            {thumbnails && count > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                    {slides.map((slide, i) => {
                        const active = i === activeIndex;
                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => onGoTo(i)}
                                className={`flex-shrink-0 rounded-xl border transition-all ${active ? "border-black" : "border-transparent hover:border-black/30"
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                                aria-current={active ? "true" : "false"}
                            >
                                <div className="h-14 w-20 overflow-hidden rounded-xl bg-black/5">
                                    {thumbRenderer ? thumbRenderer(slide, i, active) : defaultThumb(slide)}
                                </div>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function clampIndex(next, count, loop) {
    if (count <= 0) return 0;
    if (loop) return ((next % count) + count) % count;
    return Math.max(0, Math.min(next, count - 1));
}

function defaultThumb(slide) {
    if (React.isValidElement(slide) && slide.type === "img") {
        const props = slide.props || {};
        return (
            <img
                src={props.src}
                alt={props.alt || "thumbnail"}
                className="h-full w-full object-cover"
                loading="lazy"
            />
        );
    }

    return (
        <div className="h-full w-full flex items-center justify-center text-xs text-black/60">
            Thumb
        </div>
    );
}
