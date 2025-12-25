import React from 'react'

const RepoIcon = ({ className = "" }) => {
    return (
        <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h7A2.5 2.5 0 0 1 14 2.5V15a1 1 0 0 1-1.447.894L8 13.118l-4.553 2.776A1 1 0 0 1 2 15zM4.5 1A1.5 1.5 0 0 0 3 2.5V13.44l3.553-2.166a1 1 0 0 1 .894 0L11 13.44V2.5A1.5 1.5 0 0 0 9.5 1z" />
        </svg>
    );
}

export default RepoIcon