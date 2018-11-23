import React from 'react';
import PropTypes from 'prop-types';

import styles from './InfoItem.css';

const InfoItem = ({
    label,
    text,
    style,
    classNames
}) => {
    return (
        <div
            className={`${styles.infoItem}${classNames && classNames.length > 0 ? ` ${classNames.join(' ')}` : ''}`}
            style={style}
        >
            <p className={styles.label}>{label}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default InfoItem;

InfoItem.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    classNames: PropTypes.arrayOf(PropTypes.string)
};
