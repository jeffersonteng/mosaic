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
                },
                4: {
                    "name": "race0",
                    "city": "New York",
                    "state": "NY",
                    "race": [0]
                },
                5: {
                    "name": "race1",
                    "city": "New York",
                    "state": "NY",
                    "race": [1]
                },
                6: {
                    "name": "race2",
                    "city": "New York",
                    "state": "NY",
                    "race": [2]
                },
                7: {
                    "name": "race3",
                    "city": "New York",
                    "state": "NY",
                    "race": [3]
                },
                8: {
                    "name": "race4",
                    "city": "New York",
                    "state": "NY",
                    "race": [4]
                }
              };

class App extends React.Component {
    constructor() {
       super();
       this.state = {
           selectedRaces: [],
           selectedGenders: [],
           selectedOrientations: []
       };
    }

    handleRaceClick(raceId) {
        var selectedRaces = this.state.selectedRaces;
        var idx = -1;
        for (var i=0; i < selectedRaces.length; i++) {
            if (selectedRaces[i] === raceId) {
                idx = i;
                break;
            }
        }
        console.log("idx: " + idx);
        console.log("selected race: " + raceId);

        if (idx !== -1) { // exists
            console.log("exists! the state is going to be set to: ");
            console.log(selectedRaces.slice(0, idx).concat(selectedRaces.slice(idx + 1)));
            this.setState({
                selectedRaces: selectedRaces.slice(0, idx).concat(selectedRaces.slice(idx + 1))
            });
        } else {
            console.log("no exists the state is going to be set to: ");
            console.log(selectedRaces.concat(raceId));
            this.setState({
                selectedRaces: selectedRaces.concat(raceId)
            });
        }
    }

    handleGenderClick(genderId) {
        console.log("clicked gender: " + genderId);
    }

    handleOrientationClick(orientationId) {
        console.log("clicked orientation: " + orientationId);
    }

    render() {
        const raceComponentList = [];

        for (var id in races) {
            raceComponentList.push(<MenuItem key={id} id={id} name={races[id]} handleItemClick={this.handleRaceClick.bind(this)}/>);
        }

        const genderComponentList = [];

        for (var id in genders) {
            genderComponentList.push(<MenuItem key={id} id={id} name={genders[id]} handleItemClick={this.handleGenderClick.bind(this)}/>);
        }

        const orientationComponentList = [];

        for (var id in orientations) {
            orientationComponentList.push(<MenuItem key={id} id={id} name={orientations[id]} handleItemClick={this.handleOrientationClick.bind(this)}/>);
        }

        const userComponentList = [];

        var tempState = this.state;
        console.log("selected poop: " + tempState.selectedRaces);

        if (tempState.selectedRaces.length === 0) {
            for (var id in users) {
                userComponentList.push(<User key={id} user={users[id]} />);
            }
        } else {
            for (var id in users) {
                var isRaceMatch = users[id]["race"].filter(function(n) {
                        return tempState.selectedRaces.indexOf(n.toString()) !== -1;
                    }).length > 0;
                console.log(users[id]["race"]);
                console.log(isRaceMatch);

                if (isRaceMatch) {
                    userComponentList.push(<User key={id} user={users[id]} />);
                }
            }
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
