import React from 'react';
import Race from './Race';
import Gender from './Gender';
import User from './User';

require('./sass/filterView.scss');

// https://en.wikipedia.org/wiki/Race_and_ethnicity_in_the_United_States#Racial_and_ethnic_categories
const races = {
                0: "White American",
                1: "Black American",
                2: "Asian American",
                3: "Native Hawaiian",
                4: "Middle Eastern American"
              };

// http://www.slate.com/blogs/lexicon_valley/2014/02/21/gender_facebook_now_has_56_categories_to_choose_from_including_cisgender.html
const genders = {
                  0:  "Agender/Neutrois",
                  1:  "Androgyne/Androgynous",
                  2:  "Bigender",
                  3:  "Cis/Cisgender",
                  4:  "Female to Male/FTM",
                  5:  "Gender Fluid",
                  6:  "Gender Nonconforming/Variant",
                  7:  "Gender Questioning",
                  8:  "Genderqueer",
                  9:  "Intersex",
                  10: "Male to Female/MTF",
                  11: "Neither",
                  12: "Non-Binary",
                  13: "Other",
                  14: "Pangender",
                  15: "Trans/Transgender",
                  16: "Transsexual",
                  17: "Two-Spirit",
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

    const genderComponentList = [];

    for (var id in genders) {
      genderComponentList.push(<Gender key={id} name={genders[id]} />);
    }

    const userComponentList = [];

    for (var id in users) {
      userComponentList.push(<User key={id} name={users[id]["name"]} />);
    }

    return (
      <div class="filterView">
        <div class="races">
          {raceComponentList}
        </div>
        <div class="genders">
          {genderComponentList}
        </div>
        <div class="users">
          {userComponentList}
        </div>
      </div>
    );
  }
}

export default App;
