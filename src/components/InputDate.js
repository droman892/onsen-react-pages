import React, {Component} from 'react';
import {Input} from 'react-onsenui';


class InputDate extends Component {

    render() {
        return (
            <div id="inputDate" className="coreMargin">
                <Input>Date: </Input>
            </div>
        )
    }
}

export default InputDate;