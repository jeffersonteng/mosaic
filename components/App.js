import React from 'react';
import MenuItem from './MenuItem';
import User from './User';
import Menu from './Menu';

require('../sass/filterView.scss');

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

const orientations = {
                       0: "Heterosexual",
                       1: "Homosexual",
                       2: "Bisexual",
                       3: "Pansexual",
                       4: "Asexual"
                     };
const users = {
                0: {
                  "name": "Jefferson Teng",
                  "city": "Emeryville",
                  "state": "CA",
                  "race": [2]
                },
                1: {
                  "name": "Chris Parker",
                  "city": "Chicago",
                  "state": "IL",
                  "race": [1]
                },
                2: {
                  "name": "Jeff Jacobs",
                  "city": "New York",
                  "state": "NY",
                  "race": [0]
                },
                3: {
                  "name": "Aziz Ansari",
                  "city": "New York",
                  "state": "NY",
                  "race": [2]
                }
              };

class App extends React.Component {
    handleRaceClick() {
        console.log("clicked race");
    }

    handleGenderClick() {
        console.log("clicked gender");
    }

    handleOrientationClick() {
        console.log("clicked orientation");
    }

    render() {
        const raceComponentList = [];

        for (var id in races) {
          raceComponentList.push(<MenuItem key={id} name={races[id]} handleItemClick={this.handleRaceClick}/>);
        }

        const genderComponentList = [];

        for (var id in genders) {
          genderComponentList.push(<MenuItem key={id} name={genders[id]} handleItemClick={this.handleGenderClick}/>);
        }

        const orientationComponentList = [];

        for (var id in orientations) {
          orientationComponentList.push(<MenuItem key={id} name={orientations[id]} handleItemClick={this.handleOrientationClick}/>);
        }

        const userComponentList = [];

        for (var id in users) {
          userComponentList.push(<User key={id} user={users[id]} />);
        }

        return (
          <div className="filter-view">
            <Menu genderComponentList={genderComponentList} orientationComponentList={orientationComponentList} raceComponentList={raceComponentList} />

            <div className="user-section">
              <div className="users">
                {userComponentList}
              </div>
            </div>

          </div>
        );
    }
}

export default App;
