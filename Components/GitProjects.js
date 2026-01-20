import RepoCard from "@/Snippet/RepoCard";
import Image from "next/image";

export default function GitProjects({ profile, repositories = [] }) {
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

