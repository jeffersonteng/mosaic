import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
  handleClick() {
    var $this = ReactDOM.findDOMNode(this);
    console.log($this);
    if ($this.className === "filter-menu") {
      $this.className += " collapsed";
    } else {
      $this.className = "filter-menu";
    }
  }

  render() {
    const genderComponentList = this.props.genderComponentList; 
    const orientationComponentList = this.props.orientationComponentList; 
    const raceComponentList = this.props.raceComponentList; 

    return (
        <div className="filter-menu collapsed">
          <div onClick={this.handleClick.bind(this)} className="filter-view-header">Intersectional</div>
          <div className="filter-section-group">
            <div className="filter-section">
              <div className="filter-header">Race</div>
              <div className="races filter-list">
                {raceComponentList}
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-header">Gender</div>
              <div className="genders filter-list">
                {genderComponentList}
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-header">Orientation</div>
              <div className="orientations filter-list">
                {orientationComponentList}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Menu;
