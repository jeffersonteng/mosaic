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
                    "races": [2],
                    "genders": [0],
                    "orientations": [0]
                },
                1: {
                    "name": "Chris Parker",
                    "city": "Chicago",
                    "state": "IL",
                    "races": [1],
                    "genders": [1],
                    "orientations": [1]
                },
                2: {
                    "name": "Jeff Jacobs",
                    "city": "New York",
                    "state": "NY",
                    "races": [0],
                    "genders": [2],
                    "orientations": [2]
                },
                3: {
                    "name": "Aziz Ansari",
                    "city": "New York",
                    "state": "NY",
                    "races": [2],
                    "genders": [3],
                    "orientations": [3]
                },
                4: {
                    "name": "race0",
                    "city": "New York",
                    "state": "NY",
                    "races": [0],
                    "genders": [4],
                    "orientations": [4]
                },
                5: {
                    "name": "race1",
                    "city": "New York",
                    "state": "NY",
                    "races": [1],
                    "genders": [5],
                    "orientations": [5]
                },
                6: {
                    "name": "race2",
                    "city": "New York",
                    "state": "NY",
                    "races": [2],
                    "genders": [6],
                    "orientations": [6]
                },
                7: {
                    "name": "race3",
                    "city": "New York",
                    "state": "NY",
                    "races": [3],
                    "genders": [7],
                    "orientations": [7]
                },
                8: {
                    "name": "race4",
                    "city": "New York",
                    "state": "NY",
                    "races": [4],
                    "genders": [8],
                    "orientations": [8]
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
        var selectedGenders = this.state.selectedGenders;
        var idx = -1;
        for (var i=0; i < selectedGenders.length; i++) {
            if (selectedGenders[i] === genderId) {
                idx = i;
                break;
            }
        }
        console.log("idx: " + idx);
        console.log("selected gender: " + genderId);

        if (idx !== -1) { // exists
            console.log("exists! the state is going to be set to: ");
            console.log(selectedGenders.slice(0, idx).concat(selectedGenders.slice(idx + 1)));
            this.setState({
                selectedGenders: selectedGenders.slice(0, idx).concat(selectedGenders.slice(idx + 1))
            });
        } else {
            console.log("no exists the state is going to be set to: ");
            console.log(selectedGenders.concat(genderId));
            this.setState({
                selectedGenders: selectedGenders.concat(genderId)
            });
        }
    }

    handleOrientationClick(orientationId) {
        var selectedOrientations = this.state.selectedOrientations;
        var idx = -1;
        for (var i=0; i < selectedOrientations.length; i++) {
            if (selectedOrientations[i] === orientationId) {
                idx = i;
                break;
            }
        }
        console.log("idx: " + idx);
        console.log("selected orientation: " + orientationId);

        if (idx !== -1) { // exists
            console.log("exists! the state is going to be set to: ");
            console.log(selectedOrientations.slice(0, idx).concat(selectedOrientations.slice(idx + 1)));
            this.setState({
                selectedOrientations: selectedOrientations.slice(0, idx).concat(selectedOrientations.slice(idx + 1))
            });
        } else {
            console.log("no exists the state is going to be set to: ");
            console.log(selectedOrientations.concat(orientationId));
            this.setState({
                selectedOrientations: selectedOrientations.concat(orientationId)
            });
        }
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

        if (tempState.selectedRaces.length === 0 &&
            tempState.selectedGenders.length === 0 &&
            tempState.selectedOrientations.length === 0) {

            for (var id in users) {
                userComponentList.push(<User key={id} user={users[id]} />);
            }
        } else {
            for (var id in users) {
                var isRaceMatch = users[id]["races"].filter(function(n) {
                        return tempState.selectedRaces.indexOf(n.toString()) !== -1;
                    }).length > 0;

                var isGenderMatch = users[id]["genders"].filter(function(n) {
                        return tempState.selectedGenders.indexOf(n.toString()) !== -1;
                    }).length > 0;

                var isOrientationMatch = users[id]["orientations"].filter(function(n) {
                        return tempState.selectedOrientations.indexOf(n.toString()) !== -1;
                    }).length > 0;

                if (isRaceMatch || isGenderMatch || isOrientationMatch) {
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
