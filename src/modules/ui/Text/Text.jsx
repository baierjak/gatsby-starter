import React from 'react';
import PropTypes from 'prop-types';

import Types from './Text.types';

const Text = ({ styles, children, type, as }) => {
    return React.createElement(as, { className: styles.text, type }, children);
};

Text.propTypes = {
    styles: PropTypes.shape().isRequired,
    type: PropTypes.oneOf(Object.values(Types)),
    // eslint-disable-next-line
    link: PropTypes.bool,
    as: PropTypes.string,
};

Text.defaultProps = {
    as: 'span',
    type: Types.NORMAL,
    link: false,
};

export default Text;
