import Types from './Title.sizes';

export const title = ({ size, link, theme: { colors, fonts }, type, columns }) => {
    const base = {
        ...fonts.greycliffBold,
        fontStretch: 'normal',
        letterSpacing: '0.3px',
        color: colors.black,
        gridColumn: columns && `auto / span ${columns}`,
    };

    const h2Base = {
        fontSize: '3.5rem',
        lineHeight: 1.2142857143,
        letterSpacing: '-0.2px',
        color: colors.blue,

        tablet: {
            fontSize: '5.5rem',
            lineHeight: 1.25,
        },
    };

    const h3base = {
        fontSize: '3.5rem',
        lineHeight: 1.1666666667,
        letterSpacing: '-0.2px',
        color: colors.cyan,

        tablet: {
            fontSize: '3.75rem',
            lineHeight: 1.2,
        },
    };

    const h4Base = {
        fontSize: '1.4rem',
        lineHeight: 1.5555555556,
        letterSpacing: '-0.12px',
        color: colors.black,
        fontWeight: 700,

        tablet: {
            fontSize: '1.75rem',
            lineHeight: 1.4,
            fontWeight: 700,
        },
    };

    if (link) {
        base.textDecoration = 'underline';
    }

    if (type) {
        size = type;
    }

    switch (size) {
        case Types.H1:
            return Object.assign(base, {
                fontSize: '3.5rem',
                letterSpacing: '0.38px',
                lineHeight: 1.1428571429,

                tablet: {
                    fontSize: '5.5rem',
                    letterSpacing: '0.6px',
                    lineHeight: 1.1363636364,
                },
            });

        case Types.H2:
            return Object.assign(base, {
                ...h2Base,
            });

        case Types.H2_LINK:
            return Object.assign(base, {
                ...h2Base,
                boxShadow: `inset 0 -0.1875rem ${colors.blue}`,
                display: 'inline',
            });

        case Types.H3:
            return Object.assign(base, {
                ...h3base,
            });

        case Types.H3_LINK:
            return Object.assign(base, {
                fontSize: '3rem',
                letterSpacing: '-1.33px',
                color: colors.blue,
                boxShadow: `inset 0 -0.1875rem ${colors.blue}`,
                display: 'inline',
            });

        case Types.H4:
            return Object.assign(base, {
                ...h4Base,
            });

        case Types.H4_LINK:
            return Object.assign(base, {
                fontSize: '2rem',
                letterSpacing: '-0.13px',
                color: colors.blue,
                boxShadow: `inset 0 -0.1875rem ${colors.blue}`,
                display: 'inline',
            });

        case Types.H5:
            return Object.assign(base, {
                fontSize: '0.875rem',
                lineHeight: '1.0625rem',
                letterSpacing: '3px',
                color: colors.white,
            });

        default:
            return base;
    }
};
