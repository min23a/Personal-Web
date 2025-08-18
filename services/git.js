// lib/github.js
import axios from 'axios';

const GIT_API = 'https://api.github.com';

function authConfig() {
    const headers = { Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`; // optional, raises rate limits
    }
    return { headers };
}

// Keep props small & JSON-serializable
function pickUser(profile) {
    if (!profile) return null;
    return {
        login: profile.login,
        name: profile.name,
        avatar_url: profile.avatar_url,
        html_url: profile.html_url,
        bio: profile.bio,
        company: profile.company,
        blog: profile.blog,
        location: profile.location,
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
        created_at: profile.created_at,
        updated_at: profile.updated_at,
    };
}

function pickRepo(repo) {
    return {
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        html_url: repo.html_url,
        description: repo.description,
        topics: repo.topics,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        open_issues_count: repo.open_issues_count,
        archived: repo.archived,
        disabled: repo.disabled,
        pushed_at: repo.pushed_at,
        updated_at: repo.updated_at,
    };
}

export async function getUserProfile(user) {
    try {
        const res = await axios.get(`${GIT_API}/users/${user}`, authConfig());
        return pickUser(res.data);
    } catch (e) {
        console.error('[getUserProfile] error:', e?.response?.status, e?.message);
        return null;
    }
}

export async function getRepos(user, opts = {}) {
    const limit = opts.limit ?? 12;
    const includeForks = opts.includeForks ?? false;

    try {
        const res = await axios.get(
            `${GIT_API}/users/${user}/repos?per_page=100&type=owner&sort=updated`,
            authConfig()
        );
        let repos = Array.isArray(res.data) ? res.data : [];
        if (!includeForks) repos = repos.filter((r) => !r.fork);

        repos.sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
            return new Date(b.pushed_at) - new Date(a.pushed_at);
        });

        return repos.slice(0, limit).map(pickRepo);
    } catch (e) {
        console.error('[getRepos] error:', e?.response?.status, e?.message);
        return [];
    }
}
