import Head from "next/head";

export default function JsonLd({ children, data }) {
    if (!data) return null;

    // Basic safety: avoid injecting "</script" sequences
    const json = JSON.stringify(data).replace(/</g, "\\u003c");

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: json }}
            />
            {children}
        </Head>
    );
}
