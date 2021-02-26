import React, { Component, Fragment } from 'react';

import UsersContainer from './UsersContainer/UsersContainer';
import UserInfo from './UserInfo/UserInfo';

import styles from './PageHome.css';

class PageHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedUser: null
        };

        this.selectUser = this.selectUser.bind(this);
    }

    /* METHODS */

    selectUser(user) {
        this.setState({
            selectedUser: user
        });
    }

    render() {
        return (
            <Fragment>
                <div className={styles.usersContainer}>
                    <UsersContainer selectUser={this.selectUser} />
                </div>
                <div className={styles.userInfo}>
                    <UserInfo user={this.state.selectedUser} />
                </div>
            </Fragment>
        );
    }
}

export default PageHome;
