import { projects } from '@/Data/projects'
import Card from '@/Snippet/Card'
import FlexWarp from '@/Snippet/FlexWarp'
import { Heading } from '@/Snippet/Typograph'
import React from 'react'

const ProjectsSec = ({ heading = "Projects" }) => {
    return (
        <>
            <Heading cls="text-center mt-2 sm:mt-4 animate-on-scroll animate-fade-up">{heading}</Heading>
            <FlexWarp className="p-4 gap-6 sm:gap-8">
                {
                    projects &&
                    projects.map((el, index) => (
                        <Card
                            key={index}
                            className="text-white animate-on-scroll animate-fade-up bg-secondary rounded-2xl shadow-lg shadow-indigo-500/50 hover:scale-[1.02] transition-transform duration-300 w-full sm:w-[30%] max-w-sm"
                            image={el.photo}
                            title={el.title}
                            subtitle={el.type || ""}
                            description={el.description}
                            stars={el.stars || 0}
                            date={el.date || ""}
                            meta={el.role || ""}
                            tags={el.tools || []}
                            footerlink={el.link ? "View Project" : ""}
                            // href={el.link || ""}
                            href={`/projects/${el.title}`}
                            onClick={""}
                        />

                    ))
                }
            </FlexWarp>
        </>
    )
}

export default ProjectsSec;