import React from 'react';

class Gender extends React.Component {
  render() {
    return (
      <div className="filter-list-item">{this.props.name}</div>
    );
  }
}

export default Gender;
