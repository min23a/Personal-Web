import JsonLd from '@/Components/JsonLd'
import Layout from '@/Components/Layout'
import Ending from '@/Components/Section/Ending'
import ProjectsSec from '@/Components/Section/ProjectsSec'
import { personalData } from '@/Data/PersonalData'
import { seoMap } from '@/Data/seoMap'
import { schema } from '@/Data/SeoSchema'
import Breadcrumb from '@/Snippet/Breadcrumb'
import Pagewidth from '@/Snippet/Pagewidth'
import SEO from '@/Snippet/SEO'
import React from 'react'

const index = () => {
    return (
        <>
            <SEO path="projects" data={seoMap.projects} />
            <JsonLd data={schema.projects} />
            <Layout>
                <Pagewidth>
                    <Breadcrumb />
                    <ProjectsSec heading='Projects With Case Studies' />
                </Pagewidth>
            </Layout>

        </>
    )
}

export default index