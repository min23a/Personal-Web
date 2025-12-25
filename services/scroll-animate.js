let observer = null;

const SELECTOR = ".animate-on-scroll:not(.is-visible)";
const supportsIO =
    typeof window !== "undefined" && "IntersectionObserver" in window;

function reveal(el) {
    el.classList.add("is-visible");
}

function reset(el) {
    el.classList.remove("is-visible");
}

function createObserver() {
    if (!supportsIO || observer) return observer;

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    reveal(entry.target);
                } else {
                    reset(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -10% 0px",
        }
    );

    return observer;
}

/* EXPORTS */
export function initScrollAnimate(root = document) {
    if (typeof window === "undefined") return;

    const elements = root.querySelectorAll(SELECTOR);
    if (!elements.length) return;

    const reduceMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsIO || reduceMotion) {
        elements.forEach(reveal);
        return;
    }

    const io = createObserver();
    elements.forEach((el) => io.observe(el));
}

export function destroyScrollAnimate() {
    if (observer) {
        observer.disconnect();
        observer = null;
    }
}

/* AUTO INIT FOR NON-MODULE USE (Shopify / plain HTML) */
if (typeof window !== "undefined") {
    window.ScrollAnimate = { init: initScrollAnimate };

    const autoInit = () => initScrollAnimate(document);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", autoInit);
    } else {
        autoInit();
    }

    document.addEventListener?.("shopify:section:load", autoInit);
}
