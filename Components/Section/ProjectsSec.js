import { projects } from '@/Data/projects'
import Card from '@/Snippet/Card'
import FlexWarp from '@/Snippet/FlexWarp'
import { Heading } from '@/Snippet/Typograph'
import Link from 'next/link'
import React from 'react'

const ProjectsSec = ({ heading = "Projects", maxBlock }) => {
    if (maxBlock) {
        const project = projects.slice(0, maxBlock);

        return (
            <>
                <Heading cls="text-center mt-2 sm:mt-4 animate-on-scroll animate-fade-up">{heading}</Heading>
                <FlexWarp className="p-4 gap-6 sm:gap-8">
                    {
                        project &&
                        project.map((el, index) => (
                            <Card
                                key={index}
                                className="text-white animate-on-scroll animate-fade-up bg-secondary rounded-2xl shadow-lg shadow-indigo-500/50 hover:scale-[1.02] transition-transform duration-300 sm:w-[30%] max-w-sm"
                                image={el.photo}
                                title={el.title}
                                subtitle={el.type || ""}
                                description={el.description}
                                stars={el.stars || 0}
                                date={el.date || ""}
                                meta={el.role || ""}
                                tags={el.tools || []}
                                footerlink={el.link || el.repo ? "View Project" : ""}
                                // href={el.link || ""}
                                href={`/projects/${el.slug}`}
                                onClick={""}
                            />

                        ))
                    }
                </FlexWarp>
                {
                    maxBlock ?
                        <Link href={"/projects"} className="mt-6 flex justify-center max-w-[50%] sm:max-w-[30%] mx-auto px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors animate-on-scroll animate-fade-up">
                            View All
                        </Link>
                        : null
                }
            </>
        )
    }

    return (
        <>
            <Heading cls="text-center mt-2 sm:mt-4 animate-on-scroll animate-fade-up">{heading}</Heading>
            <FlexWarp className="p-4 gap-6 sm:gap-8">
                {
                    projects &&
                    projects.map((el, index) => (
                        <Card
                            key={index}
                            className="text-white animate-on-scroll animate-fade-up bg-secondary rounded-2xl shadow-lg shadow-indigo-500/50 hover:scale-[1.02] transition-transform duration-300 sm:w-[30%] max-w-sm"
                            image={el.photo}
                            title={el.title}
                            subtitle={el.type || ""}
                            description={el.description}
                            stars={el.stars || 0}
                            date={el.date || ""}
                            meta={el.role || ""}
                            tags={el.tools || []}
                            footerlink={el.link || el.repo ? "View Project" : ""}
                            // href={el.link || ""}
                            href={`/projects/${el.slug}`}
                            onClick={""}
                        />

                    ))
                }
            </FlexWarp>
        </>
    )
}

export default ProjectsSec;