import React from 'react';
import PropTypes from 'prop-types';

import User from './User/User';

import styles from './Users.css';

const Users = ({
    selectableUsers,
    toggleUserSelected
}) => (
    <div className={styles.users}>
        {selectableUsers.map((element, index) =>
            <User
                key={`key ${index}`}
                selectableUser={element}
                toggleUserSelected={toggleUserSelected}
            />
        )}
    </div>
);

export default Users;

Users.propTypes = {
    selectableUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleUserSelected: PropTypes.func.isRequired
};
