import React from "react";
import { CardGrid, CTABox, FAQText, ImageBlock, LinkPills, Prose, Section } from "@/Snippet/ContentBlocks";
import ContentHero from "./Section/ContentHero";

/**
 * BlogRenderer
 * Pass any "blog-like" data object with:
 * - hero {h1, intro, primaryCta, secondaryCta}
 * - seo {datePublished, dateModified, readingTime} (optional)
 * - sections[] {id, title, body, list[]} (optional)
 * - cta {title, desc, button} (optional)
 * - faq {enabled, title, items[]} (optional)
 * - internalLinks {title, items[]} (optional)
 */
const BlogRenderer = ({ data }) => {
    if (!data) return null;

    const { hero, seo, sections, cta, faq, internalLinks } = data;

    return (
        <main className="max-w-5xl mx-auto px-6 py-10">
            <ContentHero
                h1={hero?.h1}
                intro={hero?.intro}
                img={hero?.img}
                imgAlt={hero?.imgAlt}
                primaryCta={hero?.primaryCta}
                secondaryCta={hero?.secondaryCta}
                meta={{
                    readingTime: seo?.readingTime,
                    datePublished: seo?.datePublished,
                    dateModified: seo?.dateModified,
                }}
            />

            {!!sections?.length &&
                sections.map((s) => (
                    <Section key={s.id || s.title} id={s.id} title={s.title}>
                        <Prose text={s.body} />
                        <CardGrid items={s.list} />
                        <ImageBlock src={s.img} alt={s.imgAlt} />
                        <LinkPills items={s.cta} />
                    </Section>
                ))}

            <CTABox title={cta?.title} desc={cta?.desc} button={cta?.button} />

            <FAQText enabled={faq?.enabled} title={faq?.title} items={faq?.items} />

            <LinkPills title={internalLinks?.title} items={internalLinks?.items} />
        </main>
    );
};

export default React.memo(BlogRenderer);
