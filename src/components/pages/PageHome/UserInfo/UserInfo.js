import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import InfoItem from './InfoItem/InfoItem';

import { composeFullName, composeAddress } from 'utils/UtilsUser';
import { sanitizeString } from 'utils/UtilsString';

import styles from './UserInfo.css';

const UserInfo = ({ user }) => {
    const fullName = composeFullName(user);

    const items = user
        ?
        [
            { label: 'Name', text: fullName, style: { textTransform: 'capitalize' }, classNames: [styles.itemName] },
            { label: 'Email Address', text: sanitizeString(user.email) },
            { label: 'Phone Number', text: sanitizeString(user.cell) },
            { label: 'Address', text: composeAddress(user), style: { textTransform: 'capitalize' } },
        ]
        :
        [];

    const userHasLargePicture = user && user.picture && user.picture.large;
    const largePictureUrl = userHasLargePicture ? user.picture.large : '' ;
    const backgroundDivStyle = {};

    if (userHasLargePicture) {
        backgroundDivStyle.backgroundImage = `url(${largePictureUrl})`;
    }

    return (
        <div className={`${styles.userInfo}${user ? '' : ` ${styles.hidden}`}`}>
            <div className={styles.scrollable}>
                {user
                &&
                <Fragment>
                    <div className={styles.portraitContainer}>
                        <div className={styles.portraitBackground}
                             style={backgroundDivStyle}
                        />
                        {userHasLargePicture
                        &&
                        <img
                            src={largePictureUrl}
                            title={fullName}
                            alt={fullName}
                            className={styles.portrait}
                        />}
                        <span className={styles.name}>{fullName}</span>
                        <span className={styles.additionalInfo}>{user.cell}</span>
                    </div>
                    <div className={styles.itemsContainer}>
                        {items.map((element, index) =>
                            <InfoItem
                                key={`item ${index}`}
                                label={element.label}
                                text={element.text}
                                style={element.style}
                                classNames={element.classNames}
                            />
                        )}
                    </div>
                </Fragment>}
            </div>
        </div>
    );
};

export default UserInfo;

UserInfo.propTypes = {
    user: PropTypes.object
};
