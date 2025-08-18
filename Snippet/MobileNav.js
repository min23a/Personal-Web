import { menulist } from '@/Data/Menulist';
import img from "../logo/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { handleDisplay } from './Show';

const MobileNav = () => {
    const [x, setX] = useState("bar")

    const menu = menulist.list;
    const ext = menulist.external;
    const link_cls = 'uppercase m-[10px] transition ease-in-out delay-[1.5s] hover:font-bold';

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
            <nav className='flex justify-between items-center m-auto py-2 w-[90vw]'>
                <Link href="/" className='ml-2'>
                    <Image src={img} alt="" priority="true" className='h-[45px] w-[100%]'></Image>
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
            <div id='menu_m' className='fixed top-[61px] bg-third-d text-white w-full h-[93%] px-4 flex flex-col items-start hidden'>
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
            </div>
        </>
    )
}

export default MobileNav