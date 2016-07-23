import React from 'react';

class Orientation extends React.Component {
  handleClick() {
    console.log("clicked orientation");
  }

  render() {
    return (
      <div className="filter-list-item" onClick={this.handleClick.bind(this)}>{this.props.name}</div>
    );
  }
}

export default Orientation;
