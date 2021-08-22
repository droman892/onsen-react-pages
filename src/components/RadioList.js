import React, {Component} from 'react';
import {Radio} from 'react-onsenui';

class RadioList extends Component {

    render() {
        return (
            <div>
                <p className="bold">Send me information about:</p>
                <div id="radio1" className="coreMargin">
                <Radio>Car Loans</Radio>
                </div>
                <div id="radio2" className="coreMargin">
                <Radio>Retirement Planning</Radio>
                </div>
                <div id="radio3" className="coreMargin">
                <Radio>Mortgages</Radio>
            </div>
            </div>
        )
    }
}

export default RadioList;