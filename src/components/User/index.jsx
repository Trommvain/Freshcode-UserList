import React, { Component } from 'react';
import styles from './User.module.css'

class User extends Component {

    handleLike = () => {
        const { user: {id}, likeMessage } = this.props;
        likeMessage(id);
    }

    handleDelete = () => {
        const { user: {id}, deleteUser } = this.props;
        deleteUser(id);
    }

    render() {
        const { user: {firstName, lastName, likes, isLiked} } = this.props;
        return (
            <li className={styles.li}>
                <h3>{`${firstName} ${lastName}`}</h3>
                <section className={styles.controlBlock}>
                    <p className={styles.likes}>&#10084; {likes}</p>
                    <button 
                        className={styles.btn}
                        disabled={isLiked}
                        onClick={this.handleLike}>Like</button>
                    <button 
                        className={styles.btn}
                        onClick={this.handleDelete}>Delete user</button>
                </section>
            </li>
        );
    }
}

export default User;
