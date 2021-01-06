import Types from './Text.types';

export const text = ({ type, theme: { colors, fonts }, link, columns, as }) => {
    const base = {
        display: 'block',
        color: colors.black,
        textAlign: 'left',
        ...fonts.greycliffMedium,
        textDecoration: link ? 'underline' : 'unset',
        transition: 'color 0.2s ease-out',
        marginTop: '0',
        marginBottom: as === 'p' ? '1rem' : '0',
        gridColumn: columns && `auto / span ${columns}`,

        onHover: {
            color: link && colors.blue,
        },
    };

    switch (type) {
        case Types.NORMAL:
            return Object.assign(base, {
                fontSize: '1rem',
                lineHeight: '1.75rem',
            });

        case Types.SMALL:
            return Object.assign(base, {
                fontSize: '0.875rem',
                lineHeight: '1.37375rem',
                letterSpacing: '0.1px',
            });

        case Types.LARGE:
            return Object.assign(base, {
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                letterSpacing: '-0.08px',
            });

        case Types.SECTION:
            return Object.assign(base, {
                ...fonts.greycliffBold,
                fontSize: '0.875rem',
                lineHeight: '1.0625rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: colors.sectionTitleGrey,
                marginBottom: '2.3125rem',
            });

        default:
            return base;
    }
};
