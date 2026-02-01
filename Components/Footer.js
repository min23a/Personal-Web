import Pagewidth from '@/Snippet/Pagewidth'
import React from 'react'
import Link from 'next/link'
import { menulist } from '@/Data/Menulist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { personalData } from '@/Data/PersonalData'
import Ending from './Section/Ending'

const Footer = () => {
    const menu = menulist.list;
    const ext = menulist.external;
    const seo = menulist.authorityPage;
    const location = menulist.locationBased.slice(1, 4);
    const link_cls = 'uppercase m-[10px] transition-[text-decoration] ease-in-out delay-[1.5s] hover:underline hover:underline-offset-4 ';
    return (
        <>
            <footer className="bg-gradient-to-t from-indigo-500 via-purple-500 to-gray-500 text-white py-6 mt-24">
                <Pagewidth>
                    <Link href="/">
                        <h1 className='flex items-start font-bold text-[40px] lavishly '>
                            Abedin
                        </h1>
                    </Link>
                    <nav className="flex flex-col sm:flex-row justify-between items-start">
                        <div>
                            <div className='flex flex-col'>
                                {menu ?
                                    menu.map((x, index) => (
                                        <Link key={index} href={x === "home" ? "/" : "#" + x}
                                            className={link_cls}
                                        >
                                            {x}
                                        </Link>
                                    )) : ""
                                }
                                {ext ?
                                    ext.map((x, index) => (
                                        <Link key={index} href={"/" + x}
                                            className={link_cls}
                                        >
                                            {x}
                                        </Link>
                                    )) : ""
                                }
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            {
                                seo ?
                                    seo.map((x, index) => (
                                        <Link key={index} href={`/${x.link}`} className={link_cls}>
                                            {x.title}
                                        </Link>
                                    ))
                                    : ""
                            }
                        </div>
                        <div className='flex flex-col'>
                            {
                                location ?
                                    location.map((x, index) => (
                                        <Link key={index} href={`/${x.link}`} className={link_cls}>
                                            {x.title}
                                        </Link>
                                    ))
                                    : ""
                            }
                        </div>
                        <div className='menu-icons w-[30%] flex justify-end items-center gap-6'>
                            <Link href={`https://github.com/${process.env.GITHUB_USERNAME || personalData.github}`} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className='m-2 scale-150 hover:scale-175 transition-transform cursor-pointer' />
                            </Link>
                            <Link href="/Md Minhazul Abedin.pdf" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFileDownload} className='m-2 scale-150 hover:scale-175 transition-transform cursor-pointer' />
                            </Link>
                        </div>
                    </nav>
                    <Ending />
                </Pagewidth>
            </footer>

        </>
    )
}

export default Footer