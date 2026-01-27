import React, { useEffect, useState } from 'react'
import DesktopNav from '@/Snippet/DesktopNav'
import MobileNav from '@/Snippet/MobileNav'

const Navigation = () => {
    const [size, setSize] = useState(null)

    useEffect(() => {
        // Set initial size on client-side only
        setSize(window.innerWidth)

        // Update on window resize
        const handleResize = () => {
            setSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // While size is null (hydration), render nothing or a neutral component
    if (size === null) {
        return <div className="h-[60px]" /> // Placeholder to prevent layout shift
    }

    return (
        <>
            {
                size >= 768 ? <DesktopNav /> : <MobileNav />
            }
        </>
    )
}

export default Navigation