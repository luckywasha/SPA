import React, { Component } from 'react';
import './App.css';

// UserList component
class UserList extends Component {
  render() {
    const { users, onSelectUser } = this.props;

    return (
      <div className="user-list">
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} onClick={() => onSelectUser(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// UserDetails component
class UserDetails extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return (
        <div className="user-details">
          <h2>Select a user to view details</h2>
        </div>
      );
    }

    return (
      <div className="user-details">
        <h2>{user.name}'s Details</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
        </ul>
      </div>
    );
  }
}

// App component
class App extends Component {
  state = {
    users: [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555-555-5555' },
      { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567' }
    ],
    selectedUser: null
  };

  handleSelectUser = (user) => {
    this.setState({ selectedUser: user });
  }

  render() {
    const { users, selectedUser } = this.state;

    return (
      <div className="app">
        <UserList users={users} onSelectUser={this.handleSelectUser} />
        <UserDetails user={selectedUser} />
      </div>
    );
  }
}

export default App;
