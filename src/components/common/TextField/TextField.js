import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextField.css';

const TextField = ({
    id,
    name,
    value,
    placeholder,
    maxLength,
    isRequired,
    onChangeHandler,
    onKeyupHandler,
    onInputHandler,
    classNames
}) => {
    let inputProps = {};
    if (maxLength) {
        inputProps['maxLength'] = maxLength;
    }

    return (
        <input
            type="text"
            id={id}
            className={`${styles.textField}${classNames && classNames.length > 0 ? ` ${classNames.join(' ')}` : ''}`}
            name={name}
            placeholder={placeholder}
            {...inputProps}
            value={value}
            onChange={onChangeHandler}
            onKeyUp={onKeyupHandler}
            onInput={onInputHandler}
        />
    );
};

export default TextField;

TextField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    maxLength: PropTypes.string,
    isRequired: PropTypes.bool,
    onChangeHandler: PropTypes.func,
    onKeyupHandler: PropTypes.func,
    onInputHandler: PropTypes.func,
    classNames: PropTypes.arrayOf(PropTypes.string)
};
