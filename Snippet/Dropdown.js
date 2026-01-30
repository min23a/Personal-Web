import Link from 'next/link'
import React from 'react'

const Dropdown = ({ menu, parent }) => {
    return (
        <>
            <div className='dropdown-menu flex flex-col items-start w-full sm:w-[50%] py-2 sm:p-2 min-w-[150px] mx-auto'>
                {
                    menu ?
                        menu.map((x, index) => (
                            <Link key={index} href={`/${parent}/${x.link}`}
                                className='uppercase m-[10px] transition ease-in-out delay-[1.5s] hover:font-bold'
                            >
                                {x.title}
                            </Link>
                        )) : ""
                }
            </div>
        </>
    )
}

export default Dropdown