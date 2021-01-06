import React from 'react';
import PropTypes from 'prop-types';

import TitleTypes, { htmlTagFromTitleSize } from './Title.sizes';

const Title = ({ children, type, as, styles }) => {
    return React.createElement(htmlTagFromTitleSize(as), { className: styles.title }, children);
};

Title.propTypes = {
    styles: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
    as: PropTypes.oneOf(Object.values(TitleTypes)),
    link: PropTypes.bool,
};

Title.defaultProps = {
    link: false,
    as: TitleTypes.H3,
};

export default Title;
