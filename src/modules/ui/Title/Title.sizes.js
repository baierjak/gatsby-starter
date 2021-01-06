const TitleTypes = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H2_LINK: 'h2link',
    H3_LINK: 'h3link',
    H4_LINK: 'h4link',
};

export function htmlTagFromTitleSize(textSize) {
    return TitleTypes[textSize.toUpperCase()];
}

export default TitleTypes;
