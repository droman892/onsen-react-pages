import React, {Component} from 'react';
import {Checkbox} from 'react-onsenui';
class CheckboxFeature extends Component {

    render() {
        return (
            <div>
                <div>
                    <p className="bold">I want to:</p>
                </div>
                <div id="checkbox1" className="coreMargin">
                    <Checkbox/> Create a Budget
                </div>
                <div id="checkbox2" className="coreMargin">
                    <Checkbox/> Learn How to Invest
                </div>
                <div id="checkbox3" className="coreMargin">
                    <Checkbox/> Decrease My Debt
                </div>
            </div>
        )
    }
}

export default CheckboxFeature;