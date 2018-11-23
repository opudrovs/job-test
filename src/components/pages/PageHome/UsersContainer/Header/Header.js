import React from 'react';

import styles from './Header.css';

import logoImage from 'assets/images/logo.svg';

const Header = () => {
    let title = 'Test project logo';
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img
                    src={logoImage}
                    title={title}
                    alt={title}
                    className={styles.logo}
                />
            </div>
            <div className={styles.instructions}>
                <h1 className={styles.instructionsTitle}>Users</h1>
                <p>If you want to get contact information for a user, select this user from the list below.</p>
                <p>You can filter users by their names with the search bar.</p>
            </div>
        </div>
    );
};

export default Header;
