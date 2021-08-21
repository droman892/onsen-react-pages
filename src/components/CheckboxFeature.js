import React, {Component} from 'react';
import Checkbox1 from './Checkbox1';
import Checkbox2 from './Checkbox2';
import Checkbox3 from './Checkbox3';

class CheckboxFeature extends Component {

    render() {
        return (
            <div>
                <p className="bold">I want to:</p>
                <Checkbox1/>
                <Checkbox2/>
                <Checkbox3/>
            </div>
        )
    }
}

export default CheckboxFeature;