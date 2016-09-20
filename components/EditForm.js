/**
 * Created by jteng on 9/17/16.
 */

import React from 'react';

class EditForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <form action="/users" method="POST">
                <div>
                    Name:
                    <input type="text" name="name"/>
                </div>

                <div>
                    City:
                    <input type="text" name="city"/>
                </div>

                <div>
                    Gender:
                    <input type="text" name="gender"/>
                </div>

                <div>
                    Race:
                    <input type="text" name="race"/>
                </div>

                <div>
                    Orientation:
                    <input type="text" name="orientation"/>
                </div>

                <input type="submit"/>
            </form>
        );
    }
}
export default EditForm;
