import { menulist } from '@/Data/Menulist';
import Link from 'next/link';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faFileDownload, faXmark } from '@fortawesome/free-solid-svg-icons';
import { handleDisplay } from './Show';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { personalData } from '@/Data/PersonalData';
import Dropdown from './Dropdown';

const MobileNav = () => {
    const [x, setX] = useState("bar")

    const menu = menulist.list;
    const ext = menulist.external;
    const link_cls = 'uppercase m-[10px] w-full transition ease-in-out delay-[1.5s] hover:font-bold';

    const handleclick = () => {
        const dropdown = document.querySelector('.dropdown');
        const arrow = document.querySelector('.dropdown-arrow');
        const menu = dropdown.querySelector('div');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.style.maxHeight = menu.scrollHeight + "px";
            arrow.classList.add('rotate-180');
        } else {
            menu.classList.add('hidden');
            menu.style.maxHeight = null;
            arrow.classList.remove('rotate-180');
        }
    }

    const changeStat = () => {
        const id = document.getElementById("menu_m");
        let state = x;
        const f = setX;
        x === "bar" ?
            handleDisplay({ id, state, f })
            :
            handleDisplay({ id, state, f })
    }

    return (
        <>
            <nav className='flex justify-between items-center m-auto py-2 w-full px-3'>
                <Link href="/" className='ml-2'>
                    <h1 className='flex items-start font-bold text-[40px] lavishly bg-gradient-to-r from-indigo-500 via-purple-500 to-white-500 bg-clip-text text-transparent'>Abedin</h1>
                </Link>

                <button onClick={() => changeStat()}>
                    {
                        x === "bar" ?
                            <FontAwesomeIcon icon={faBars} width="32px" className='text-white' />
                            :
                            <FontAwesomeIcon icon={faXmark} width="32px" className='text-white' />
                    }
                </button>
            </nav>
            <div id='menu_m' className='fixed top-[61px] bg-gradient-to-r from-indigo-500 via-purple-500 to-white-500 text-white w-[90%] h-[90%] px-4 flex flex-col items-start closed animate-on-click'>
                {menu ?
                    menu.map((x, index) => (
                        <Link key={index} href={x === "home" ? "/" : "#" + x}
                            className={link_cls}
                            onClick={() => changeStat()}
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
                    menulist.blog ?
                        menulist.blog.subMenu ?
                            <div onClick={handleclick} className={link_cls + ' cursor-pointer dropdown relative'}>
                                <Link href={`/${menulist.blog.link}`} >
                                    {menulist.blog.title}
                                    <FontAwesomeIcon icon={faChevronDown} className='ml-2 text-sm dropdown-arrow transition-all' />
                                </Link>
                                <div className='max-h-0 transition-all duration-300 bottom-[0px] bg-gradient-to-r from-gray-100/10 to-gray-200/10 shadow-xl shadow-gray-200/10 left-[0px] w-full hidden'>
                                    <Dropdown menu={menulist.blog.subMenu} parent={menulist.blog.link} />
                                </div>
                            </div>
                            : <Link href={`/${menulist.blog.link}`} className={link_cls}>
                                {menulist.blog.title}
                            </Link>
                        : ""
                }
                <div className='menu-icons '>
                    <Link href={`https://github.com/${process.env.GITHUB_USERNAME || personalData.github}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='m-2 hover:scale-125 transition-transform cursor-pointer' />
                    </Link>
                    <Link href="/Md Minhazul Abedin.pdf" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileDownload} className='m-2 hover:scale-125 transition-transform cursor-pointer' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MobileNav