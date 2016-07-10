import React from 'react';

class User extends React.Component {
  render() {
    var user = this.props.user;

    return (
      <div className="user-box">
        <img className="user-pic" src="/img/a_bear.jpeg"/>
        <div className="user-name">
          {user["name"]}
        </div>
        <div className="user-city">
          {user["city"]}, {user["state"]}
        </div>
      </div>
    );
  }
}

export default User;
