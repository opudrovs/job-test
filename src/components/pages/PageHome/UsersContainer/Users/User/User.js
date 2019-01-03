import React from 'react';
import PropTypes from 'prop-types';

import { composeFullName } from 'utils/UtilsUser';

import styles from './User.css';

const User = ({
    selectableUser,
    toggleUserSelected
}) => {
    const user = selectableUser.data;
    const fullName = composeFullName(user);

    return (
        <div className={styles.spacing}>
            <div
                className={`${styles.user}${selectableUser.isSelected ? ` ${styles.selected}` : ''}`}
                onClick={() => toggleUserSelected(selectableUser.index)}
            >
                {user && user.picture && user.picture.medium
                &&
                <img
                    src={user.picture.medium}
                    title={fullName}
                    alt={fullName}
                    className={styles.portrait}
                />}

                <div className={styles.name}>{fullName}</div>
            </div>
        </div>
    );
};

export default User;

User.propTypes = {
    selectableUser: PropTypes.object.isRequired,
    toggleUserSelected: PropTypes.func.isRequired
};
