import React from 'react';

class Race extends React.Component {
  handleClick() {
    console.log("Race clicked");
  }

  render() {
    return (
      <div className="filter-list-item" onClick={this.handleClick.bind(this)}>{this.props.name}</div>
    );
  }
}

export default Race;
