import { HireDetails } from '@/pages/hire'
import { faUpwork } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useContext } from 'react'

const HirePage = () => {
    const data = useContext(HireDetails)

    const inp_cls = "min-h-[32px] w-full p-2 border-[2px] border-gray-200 rounded"

    return (
        <>
            <div className='w-4/5 m-auto h-full flex flex-col gap-4 items-center justify-center '>
                <h1 className='font-bold text-center text-[20px] uppercase mt-4'>Contact Me</h1>
                <div className='m-auto w-1/2 '>
                    <form id="contact" className='w-full flex flex-col gap-2 m-4'>
                        <input type='text' name='first_name' id="first_name" placeholder='First Name' className={inp_cls} required />
                        <input type='text' name='last_name' id="last_name" placeholder='Last Name' className={inp_cls} required />
                        <input type='number' name='number' id='number' placeholder='Number' className={inp_cls} required />
                        <input type="email" name='email' id="email" placeholder='Email' className={inp_cls} required />
                        <textarea type='textarea' name='message' id='msg' placeholder='Message' className={inp_cls} required />
                        <button type='submit' className='bg-secondary hover:bg-cta-hv text-white font-bold p-3 rounded w-2/5 m-auto '>Send</button>
                    </form>
                </div>
                <div className='flex items-center justify-center text-[20px] w-full'>
                    <Link href={data.upwork} className='m-2 text-black-300 hover:text-white hover:bg-green-400 font-bold border-[3px] border-black hover:border-green-400 p-3 rounded-md'>
                        <FontAwesomeIcon icon={faUpwork} width="20px" height="20px" />
                    </Link>
                    <Link href={'mailto:' + data.email} className='m-2 text-black-300 hover:text-white hover:bg-blue-400 font-bold border-[3px] border-black hover:border-blue-400 p-3 rounded-md'>
                        <FontAwesomeIcon icon={faEnvelope} width="20px" height="20px" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HirePage