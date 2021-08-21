import React, {Component} from 'react';
import {Input} from 'react-onsenui';


class InputText1 extends Component {

    render() {
        return (
            <div id="inputText1" className="coreMargin">
                <Input placeholder="First Name..." modifier="underbar"></Input>
            </div>
        )
    }
}

export default InputText1;