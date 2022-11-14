import React, { Component } from 'react';
import User from '../User';

class UsersList extends Component {
    state = {
        users: [
            {
                id: 1,
                firstName: 'Ilya',
                lastName: 'Muromets',
                likes: 15,
                isLiked: false
            },
    
            {
                id: 2,
                firstName: 'Dobrynya',
                lastName: 'Nikitich',
                likes: 50,
                isLiked: false
            },
    
            {
                id: 3,
                firstName: 'Alyosha',
                lastName: 'Popovich',
                likes: 36,
                isLiked: false
            }
        ],
    };

    likeMessage = (userId) => {
        const newUsers = this.state.users.map((user) => {
            const newUser = {
              ...user,
              likes: user.id === userId ? user.likes + 1 : user.likes,
              isLiked: user.id === userId ? true : user.isLiked,
            };
      
            return newUser;
          });
      
        this.setState({
            users: newUsers,
        });
    }

    deleteUser = (userId) => {
        const newUsers = this.state.users.filter((user) => user.id !== userId);
      
        this.setState({
            users: newUsers,
        });
    }

    render() {
        const {users} = this.state;
        const usersList = users.map((user) => {
            return(
            <User
                key={user.id} 
                user={user}
                likeMessage={this.likeMessage}
                deleteUser={this.deleteUser}/>
            );
        });
        return (
            <ul>
                {usersList}
            </ul>
        );
    }
}

export default UsersList;
