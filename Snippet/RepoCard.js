import React from 'react'
import RepoIcon from './RepoIcon';
import Link from 'next/link';

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

const RepoCard = ({ repo }) => {
    return (
        <article className="rounded-lg border border-[#30363d] bg-[#0d1117] hover:border-gray-600 transition-colors animate-on-scroll animate-fade-up animate-delay-300">
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

export default RepoCard