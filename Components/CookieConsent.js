import { getConsent, setConsent } from "@/Snippet/consent";
import { useEffect, useState } from "react";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = getConsent();
        if (!consent) setVisible(true);
    }, []);

    console.log(visible)
    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 max-w-3xl mx-auto rounded-2xl border bg-white p-5 shadow-lg">
            <p className="text-sm text-gray-700">
                This site uses analytics cookies to understand how visitors interact
                with the site. This helps improve performance and content quality.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
                <button
                    onClick={() => {
                        setConsent("granted");
                        setVisible(false);
                        window.location.reload();
                    }}
                    className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
                >
                    Accept analytics
                </button>

                <button
                    onClick={() => {
                        setConsent("denied");
                        setVisible(false);
                    }}
                    className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100 transition"
                >
                    Reject
                </button>

                <a
                    href="/privacy-policy"
                    className="text-sm underline underline-offset-4 ml-auto"
                >
                    Privacy policy
                </a>
            </div>
        </div>
    );
}
