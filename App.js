import React from 'react';
import Race from './Race';
import User from './User';

// https://en.wikipedia.org/wiki/Race_and_ethnicity_in_the_United_States#Racial_and_ethnic_categories
const races = {
                0: "White American",
                1: "Black American",
                2: "Asian American",
                3: "Native Hawaiian",
                4: "Middle Eastern American"
              };

const users = {
                0: {
                  "name": "Jefferson Teng",
                  "race": [2]
                },
                1: {
                  "name": "Chris Parker",
                  "race": [1]
                },
                2: {
                  "name": "John Jacobs",
                  "race": [0]
                }
              };

class App extends React.Component {
  render() {
    const raceComponentList = [];

    for (var id in races) {
      raceComponentList.push(<Race key={id} name={races[id]} />);
    }

    const userComponentList = [];

    for (var id in users) {
      userComponentList.push(<User key={id} name={users[id]["name"]} />);
    }

    return (
      <div>
        {raceComponentList}
        {userComponentList}
      </div>
    );
  }
}

export default App;
