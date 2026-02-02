import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Dropdown = ({ menu, parent }) => {
    const list = menu ? menu.length > 4 ? menu.slice(0, 4) : menu : []
    return (
        <>
            <div className='dropdown-menu flex flex-col items-start w-full sm:w-[50%] py-2 sm:p-2 min-w-[150px] mx-auto'>
                {
                    menu ?
                        menu.map((x, index) => (
                            <Link key={index} href={`/${parent}/${x.link}`}
                                className='uppercase m-[5px] transition ease-in-out delay-[1.5s] hover:font-bold'
                            >
                                {x.title}
                            </Link>
                        )) : ""
                }
                {
                    menu.length > 4 ?
                        <Link className='uppercase m-[5px] transition ease-in-out delay-[1.5s] hover:font-bold' href={`/${parent}`}>
                            View more <FontAwesomeIcon className='ml-3' icon={faArrowRight} />
                        </Link> : null
                }
            </div>
        </>
    )
}

export default Dropdown