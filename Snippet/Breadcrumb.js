import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = ({ baseLabel = "Home" }) => {
    const router = useRouter();

    // Get path segments
    const segments = router.asPath.split("?")[0].split("/").filter(Boolean);

    const crumbs = [
        { label: baseLabel, href: "/" },
        ...segments.map((seg, i) => {
            const href = "/" + segments.slice(0, i + 1).join("/");
            const label = decodeURIComponent(seg)
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase());
            return { label, href };
        }),
    ];

    return (
        <nav aria-label="Breadcrumb" className="text-sm text-white">
            <ol className="flex flex-wrap items-center gap-1">
                {crumbs.map((c, i) => (
                    <li key={c.href} className="flex items-center gap-1">
                        {i !== 0 && <span>/</span>}
                        {i === crumbs.length - 1 ? (
                            <span className="text-white font-medium">{c.label}</span>
                        ) : (
                            <Link href={c.href} className="hover:underline">
                                {c.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
