import React, {Component} from 'react';
import {Input} from 'react-onsenui';


class InputDate extends Component {

    render() {
        return (
            <div id="inputDate" className="coreMargin">
                <Input placeholder="Today's Date..." modifier="underbar"></Input>
            </div>
        )
    }
}

export default InputDate;