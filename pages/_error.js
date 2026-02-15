import Layout from "@/Components/Layout"
import BlogSec from "@/Components/Section/BlogSec"
import ProjectsSec from "@/Components/Section/ProjectsSec"
import Pagewidth from "@/Snippet/Pagewidth"
import { Heading } from "@/Snippet/Typograph"

const Error = ({ statusCode }) => {
    return (
        <Layout>
            <Pagewidth>
                <Heading cls="text-center min-h-[40vh] translate-y-1/2">
                    {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : 'An error occurred on client'}
                </Heading>
                <Heading>
                    You can also view:
                </Heading>
                <ProjectsSec maxBlock={6} />
                <BlogSec title="Articles" maxblogs={3} />
            </Pagewidth>
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error