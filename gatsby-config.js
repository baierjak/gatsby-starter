module.exports = {
    siteMetadata: {
        title: `Tutify`,
        description: `Tutify description`,
        author: `Tutify`,
        image: "",
        siteUrl: `http://www.tutify.com`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        "gatsby-theme-fela",
        {
            resolve: "gatsby-plugin-intl",
            options: {
                path: `${__dirname}/src/localization`,
                languages: ["cs", "en"],
                defaultLanguage: "en",
                redirect: false,
            },
        },
        "gatsby-plugin-webpack-bundle-analyser-v2",
        {
            resolve: `gatsby-plugin-portal`,
            options: {
                key: "modal",
                id: "modal",
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // trackingId: 'UA-180549212-1',
                head: false,
            },
        },
        // @TODO: Remove after resolving asset import issue
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "assets",
                path: `${__dirname}/static/`,
            },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: `ackeegatsbydemo.wordpress.com`,
                protocol: `http`,
                // Indicates if a site is hosted on WordPress.com:
                hostingWPCOM: true,
                includedRoutes: [
                    '**/posts',
                    '**/tags',
                    '**/categories'
                ]
            }
        }
    ],
}
