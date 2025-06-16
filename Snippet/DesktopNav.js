import Image from 'next/image'
import Link from 'next/link'
import img from "../logo/logo.png"
import { menulist } from '@/Data/Menulist'
import React from 'react'

const DesktopNav = () => {
    const menu = menulist.list;
    const ext = menulist.external;
    const link_cls = 'uppercase m-[10px] transition ease-in-out delay-[1.5s] hover:font-bold';
    return (
        <>
            <nav className='flex  justify-between items-center p-3 w-[96vw] max-w-[1200px] h-[60px] m-auto'>
                <Link href="/">
                    <Image src={img} alt="" priority="true" className='h-[45px] w-[100%]'></Image>
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
                </div>
            </nav>
            <hr />
        </>
    )
}

export default DesktopNav