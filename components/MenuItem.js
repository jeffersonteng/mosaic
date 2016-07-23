import React from 'react';

class MenuItem extends React.Component {
  constructor() {
    super();
    this.state = {selected: false};
  }

  handleClick() {
    this.props.handleItemClick(this.props.id);
    console.log("item clicked");
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

export default MenuItem;
