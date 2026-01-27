import Link from 'next/link'
import { menulist } from '@/Data/Menulist'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { personalData } from '@/Data/PersonalData'

const DesktopNav = () => {
    const menu = menulist.list;
    const ext = menulist.external;
    const seo = menulist.seo;
    const link_cls = 'uppercase m-[10px] transition ease-in-out delay-[1.5s] hover:font-bold';
    return (
        <>
            <nav className='flex justify-between items-center p-3 w-[96vw] max-w-[1200px] h-[60px] m-auto'>
                <Link href="/">
                    <h1 className='flex items-start font-bold text-[40px] lavishly bg-gradient-to-r from-indigo-500 via-purple-500 to-white-500 bg-clip-text text-transparent'>
                        Abedin
                    </h1>
                </Link>
                <div className='m-3'>
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
                    {
                        seo ?
                            seo.map((x, index) => (
                                <Link key={index} href={"/" + x.link}
                                    className={link_cls}
                                >{x.title}</Link>
                            )) : ""
                    }
                </div>
                <div className='menu-icons w-[30%}'>
                    <Link href={`https://github.com/${process.env.GITHUB_USERNAME || personalData.github}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='m-2 hover:scale-125 transition-transform cursor-pointer' />
                    </Link>
                    <Link href="/Md Minhazul Abedin.pdf" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileDownload} className='m-2 hover:scale-125 transition-transform cursor-pointer' />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default DesktopNav