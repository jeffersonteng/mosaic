import React from 'react';

class Gender extends React.Component {
  handleClick() {
    console.log("Gender clicked");
  }

  render() {
    return (
      <div className="filter-list-item" onClick={this.handleClick.bind(this)}>{this.props.name}</div>
    );
  }
}

export default Gender;
