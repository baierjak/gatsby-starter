import Types from './Title.sizes';

export const title = ({size, link, theme: {colors, fonts}, type, columns}) => {
    const base = {
        ...fonts.rubikMedium,
        fontWeight: 500,
        fontStretch: 'normal',
        color: colors.black,
    };

    const h2Base = {
        fontSize: "24px",
    };

    const h3base = {
        fontSize: "18px",
        lineHeight: "24px",
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
                fontSize: "32px",
                lineHeight: "42px"
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
