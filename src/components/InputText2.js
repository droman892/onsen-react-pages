import React, {Component} from 'react';
import {Input} from 'react-onsenui';


class InputText2 extends Component {

    render() {
        return (
            <div id="inputText2" className="coreMargin">
                <Input placeholder="Last Name..." modifier="underbar"></Input>
            </div>
        )
    }
}

export default InputText2;