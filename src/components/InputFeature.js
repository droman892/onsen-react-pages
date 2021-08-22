import React, {Component} from 'react';
import {Input} from 'react-onsenui';
class InputFeature extends Component {

    render() {
        return (
            <div id="inputFeature">
                <div id="inputText1" className="coreMargin">
                    <Input placeholder="First Name..." modifier="underbar"></Input>
                </div>
                <div id="inputText2" className="coreMargin">
                    <Input placeholder="Last Name..." modifier="underbar"></Input>
                </div>
                <div id="inputDate" className="coreMargin">
                    <Input placeholder="Today's Date..." modifier="underbar"></Input>
                </div>
            </div>
        )
    }
}

export default InputFeature;