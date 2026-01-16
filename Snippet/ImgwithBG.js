import React from 'react'
import Image from 'next/image';

const ImgwithBG = ({ bg, children }) => {
  return (
    <section className={`h-[50vw] w-full flex justify-center items-center realtive`}>
      <Image src={bg} alt="Hero Background" className="absolute top-0 left-0 w-full h-full object-fit -z-10" />
      {children}
    </section>
  )
}

export default ImgwithBG