import Heading from '@/Snippet/Heading'
import React, { useContext } from 'react'
import { DetailsContext } from '../Hompage'
import FlexWarp from '@/Snippet/FlexWarp'
import CardImg from '@/Snippet/CardImg'

const Skills = () => {
    const data = useContext(DetailsContext)
    const exData = data.exData;
    return (
        <>
            <section id="skill" className='pt-70'>
                <Heading  >Skills & tools</Heading>
                <FlexWarp>
                    {
                        exData ? exData.map((x, index) => (
                            <CardImg w="2048" h="2048" key={index} img={x.src} cls="w-[200px] h-[200px] m-2 p-2" />
                        )) : "xx"
                    }
                </FlexWarp>
            </section>
        </>
    )
}

export default Skills