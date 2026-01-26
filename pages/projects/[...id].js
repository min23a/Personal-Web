import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProjectBySlug } from "@/Data/projects";
import Breadcrumb from "@/Snippet/Breadcrumb";
import Layout from "@/Components/Layout";
import { Heading } from "@/Snippet/Typograph";
import Image from "next/image";
import CaseBlock from "@/Snippet/CaseBlock";
import Stars from "@/Snippet/Stars";
import Ending from "@/Components/Section/Ending";

const Id = () => {
    const router = useRouter();
    const raw = router.query.id;

    // Catch-all route: id can be undefined on first render
    const parts = useMemo(() => {
        if (Array.isArray(raw)) return raw;
        if (raw) return [raw];
        return [];
    }, [raw]);

    // Support both: /projects/slug  OR /projects/category/slug
    const slug = useMemo(() => {
        if (!parts.length) return undefined;
        return parts.length >= 2 ? parts[parts.length - 1] : parts[0];
    }, [parts]);

    const project = useMemo(() => {
        return slug ? getProjectBySlug(slug) : null;
    }, [slug]);

    // loading state (during first render)
    if (!router.isReady) {
        return <div className="max-w-4xl mx-auto p-6">Loading...</div>;
    }

    // not found
    if (!project) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-semibold">Project not found</h1>
                <p className="mt-2 text-gray-600">
                    The project you’re looking for doesn’t exist.
                </p>
                <Link className="inline-block mt-4 underline" href="/projects">
                    Back to projects
                </Link>
            </div>
        );
    }

    const hasTools = Array.isArray(project.tools) && project.tools.length > 0;

    return (
        <>
            <Layout>
                <div className="max-w-5xl mx-auto p-6">
                    {/* Breadcrumb */}
                    <Breadcrumb />

                    {/* Header */}
                    <section className="mt-6">
                        <p className="text-sm uppercase tracking-wide my-3">
                            {project.type}
                        </p>

                        <Heading className="mt-2 text-3xl font-bold">
                            {project.title}
                        </Heading>

                        {
                            project.stars !== undefined && (
                                <Stars value={project.stars} />
                            )

                        }

                        {/* Image */}
                        {project.photo?.src ? (
                            <div className="mt-10 overflow-hidden rounded-2xl border">
                                <Image
                                    src={project.photo.src}
                                    alt={project.photo.alt || project.title}
                                    className="w-full h-auto"
                                    priority={!!project.photo?.priority}
                                />
                            </div>
                        ) : null}
                    </section>

                    {/* Body */}
                    <section className="mt-10 grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h2 className="text-xl font-semibold">Overview</h2>
                            <p className="mt-3 leading-relaxed whitespace-pre-line">
                                {project.detailed_desc}
                            </p>

                            <CaseBlock
                                title="Case Study"
                                items={project.case_study}
                                className="mt-10"
                            />

                            <CaseBlock
                                title="Technical Architecture"
                                items={project.architecture}
                                className="mt-10"
                            />

                        </div>

                        <aside className="rounded-2xl border p-5 h-fit lg:sticky lg:top-20">
                            <h3 className="font-semibold">Project details</h3>

                            {project.role ? (
                                <div className="mt-4">
                                    <p className="text-sm">Role</p>
                                    <p>{project.role}</p>
                                </div>
                            ) : null}



                            {hasTools && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tools.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 text-sm rounded-full border hover:bg-white hover:shadow-md hover:text-black transition duration-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="mt-6 flex flex-wrap gap-3">
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 rounded-full border hover:bg-white hover:shadow-md hover:text-black transition duration-400"
                                    >
                                        Live demo
                                    </a>
                                ) : null}

                                {project.repo ? (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 rounded-full border hover:bg-white hover:shadow-md hover:text-black transition duration-400"
                                    >
                                        GitHub
                                    </a>
                                ) : null}
                            </div>

                            <div className="mt-6 ">
                                <Link className="underline" href="/projects">
                                    ← Back to all projects
                                </Link>
                            </div>
                        </aside>
                    </section>

                    {/* Gallery (optional) */}
                    {/* {!!project.images?.length && project.images.length > 1 && (
            <section className="mt-12">
              <h2 className="text-xl font-semibold">Screenshots</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.images.slice(1).map((img) => (
                  <div key={img.src} className="overflow-hidden rounded-2xl border">
                    <img
                      src={img.src}
                      alt={img.alt || project.title}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          )} */}
                </div>

                <Ending></Ending>
            </Layout>
        </>
    );
};

export default Id;
