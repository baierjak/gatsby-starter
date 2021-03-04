import React from "react"
import {graphql} from "gatsby"
import {injectIntl} from 'gatsby-plugin-intl';

import {HomePage} from "../modules/homepage"
import SEO from "../components/SEO"

const IndexPage = ({data}) => {
    return (
        <>
            <SEO pageId="home" />
            <HomePage lessons={data.allWordpressPost.edges} />
        </>
    )
}

export const postsQuery = graphql`
    query {
        allWordpressPost(sort: { fields: [date] }) {
            edges {
                    node {
                        id
                        title
                        excerpt
                    }
            }
        }
    }
`

export default injectIntl(IndexPage)
