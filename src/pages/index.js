import React from "react"
import { injectIntl } from 'gatsby-plugin-intl';

import { HomePage } from "../modules/homepage"
import SEO from "../components/SEO"

const IndexPage = () => {
    return (
        <>
            <SEO pageId="home" />
            <HomePage />
        </>
    )
}

export default injectIntl(IndexPage)
