import React, { useEffect, useState } from 'react'
import DesktopNav from '@/Snippet/DesktopNav'
import MobileNav from '@/Snippet/MobileNav'

const Navigation = () => {
    const [size, setSize] = useState(768)

    let screen = 768

    if (typeof window !== "undefined") {
        screen = window.screen.width
    }

    useEffect(
        () => {
            setSize(screen)
        }, [screen]
    )

    return (
        <>
            {
                size >= 768 ? <DesktopNav /> : <MobileNav />
            }
        </>
    )
}

export default Navigation