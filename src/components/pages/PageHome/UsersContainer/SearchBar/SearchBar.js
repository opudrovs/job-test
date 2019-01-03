import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'components/common/TextField/TextField';

import styles from './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    /* EVENT HANDLERS */

    onChangeHandler(e) {
        const userName = e.target.value;
        this.setState({
            userName: userName
        });
        this.props.setUserName(userName.toLowerCase());
    }

    onSubmitHandler(e) {
        e.preventDefault();
    }

    /* METHODS */

    render() {
        return (
            <div className={styles.searchBar}>
                <span className={styles.caption}>Filter users by name:</span>
                <form onSubmit={this.onSubmitHandler}>
                    <TextField
                        id="search-string"
                        name="user_name"
                        value={this.state.userName}
                        placeholder="User name"
                        maxLength="30"
                        classNames={[styles.textField]}
                        onChangeHandler={this.onChangeHandler}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;

SearchBar.propTypes = {
    setUserName: PropTypes.func.isRequired
};
