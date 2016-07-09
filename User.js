import React from 'react';

class User extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

export default User;
