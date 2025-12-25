import Heading from '@/Snippet/Heading'
import React, { useContext } from 'react'
import FlexWarp from '@/Snippet/FlexWarp'
import CardImg from '@/Snippet/CardImg'
import { DetailsContext } from '../Layout'

const Skills = () => {
    const data = useContext(DetailsContext)
    const exData = data.exData;
    return (
        <>
            <section id="skill" className='pt-3'>
                <Heading cls="animate-on-scroll animate-fade-up" >Skills & tools</Heading>
                <FlexWarp>
                    {
                        exData ? exData.map((x, index) => (
                            <CardImg w="2048" h="2048" key={index} img={x.src} cls="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] m-2 p-2 animate-on-scroll animate-fade-up animate-delay-300" />
                        )) : "xx"
                    }
                </FlexWarp>
            </section>
        </>
    )
}

export default Skills