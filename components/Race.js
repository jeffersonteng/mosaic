import React from 'react';

class Race extends React.Component {
  constructor() {
    super();
    this.state = {selected: false};
  }

  handleClick() {
    console.log("Race clicked");
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {
    return (
      <div className={"filter-list-item " + (this.state.selected ? "selected" : "")}
           onClick={this.handleClick.bind(this)}>
        {this.props.name}
      </div>
    );
  }
}

export default Race;
