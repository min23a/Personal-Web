import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, Children, cloneElement, isValidElement } from "react";

const Accordion = ({ children, defaultOpen = false, className = "" }) => {
    const [open, setOpen] = useState(defaultOpen);

    const items = Children.toArray(children);

    const header = items.find((child) => child.type === Accordion.Header);
    const body = items.find((child) => child.type === Accordion.Body);

    return (
        <div className={`border rounded-xl overflow-hidden ${className}`}>
            {header &&
                cloneElement(header, {
                    open,
                    toggle: () => setOpen((o) => !o),
                })}

            <div
                className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    {body}
                </div>
            </div>
        </div>
    );
};

Accordion.Header = ({ children, open, toggle }) => (
    <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-medium transition"
    >
        <span>{children}</span>
        <span
            className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                }`}
        >
            <FontAwesomeIcon icon={faChevronDown} width={"20px"} />
        </span>
    </button>
);

Accordion.Body = ({ children }) => (
    <div className="px-5 py-4 leading-relaxed">
        {children}
    </div>
);

export default Accordion;
