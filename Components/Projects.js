import Image from "next/image";
import Link from "next/link";

// minimal language → color map (tweak as you like)
const langColor = (lang) => {
    const map = {
        JavaScript: "#f1e05a",
        TypeScript: "#3178c6",
        Liquid: "#0ea5e9",       // close to GitHub’s blue tag look
        Python: "#3572A5",
        HTML: "#e34c26",
        CSS: "#563d7c",
        Shell: "#89e051",
        Go: "#00ADD8",
        Ruby: "#701516",
        PHP: "#4F5D95",
    };
    return map[lang] || "#8b949e"; // fallback gray
};

export default function Projects({ profile, repositories = [] }) {
    return (
        <div className="text-gray-200">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center gap-6 py-6">
                <div className="shrink-0">
                    <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden ring-2 ring-gray-700">
                        <Image
                            src={profile?.avatar_url || "/avatar.png"}
                            alt={profile?.name || profile?.login || "avatar"}
                            fill
                            sizes="144px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="flex-1 text-black">
                    <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
                        {profile?.name || profile?.login}
                    </h1>
                    {profile?.login && (
                        <p className="text-gray-400 text-sm sm:text-base">@{profile.login}</p>
                    )}
                    {profile?.bio && (
                        <p className="mt-3 text-black text-sm sm:text-base max-w-2xl">
                            {profile.bio}
                        </p>
                    )}
                </div>
            </header>

            {/* Repo grid */}
            <section className="mt-4 grid gap-4 sm:gap-5 md:grid-cols-2">
                {repositories.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </section>
        </div>
    );
}

function RepoCard({ repo }) {
    return (
        <article className="rounded-lg border border-[#30363d] bg-[#0d1117] hover:border-gray-600 transition-colors">
            <div className="p-4">
                {/* Top row: icon + name + Public badge */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <RepoIcon className="h-4 w-4 text-gray-400" />
                        <Link
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-[#58a6ff] hover:underline underline-offset-2 break-all"
                        >
                            {repo.name}
                        </Link>
                    </div>

                    <span className="text-[11px] leading-5 rounded-full border border-[#30363d] px-2 text-gray-300">
                        Public
                    </span>
                </div>

                {/* Description */}
                {repo.description && (
                    <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                        {repo.description}
                    </p>
                )}

                {/* Footer: language dot + name (stars/forks intentionally omitted per your screenshot) */}
                <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
                    {repo.language && (
                        <span className="inline-flex items-center gap-2">
                            <span
                                aria-hidden
                                className="inline-block h-3 w-3 rounded-full"
                                style={{ backgroundColor: langColor(repo.language) }}
                            />
                            <span className="truncate">{repo.language}</span>
                        </span>
                    )}
                    {/* topics (optional, comment out if you don't want them) */}
                    {/* {repo.topics?.slice(0, 3).map((t) => (
            <span key={t} className="rounded-md border border-[#30363d] px-2 py-[2px] text-[11px]">
              {t}
            </span>
          ))} */}
                </div>
            </div>
        </article>
    );
}

function RepoIcon({ className = "" }) {
    return (
        <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h7A2.5 2.5 0 0 1 14 2.5V15a1 1 0 0 1-1.447.894L8 13.118l-4.553 2.776A1 1 0 0 1 2 15zM4.5 1A1.5 1.5 0 0 0 3 2.5V13.44l3.553-2.166a1 1 0 0 1 .894 0L11 13.44V2.5A1.5 1.5 0 0 0 9.5 1z" />
        </svg>
    );
}
