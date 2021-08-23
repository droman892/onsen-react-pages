import React, {Component} from 'react';
import {Input} from 'react-onsenui';
import MyContext from './MyContext';
class InputFeature extends Component {

    render() {
        return (
            <div id="inputFeature">
                <div id="inputText1" className="coreMargin">
                    <Input placeholder={MyContext} modifier="underbar"/>
                </div>
                <div id="inputText2" className="coreMargin">
                    <Input placeholder="Last Name..." modifier="underbar"/>
                </div>
                <div id="inputDate" className="coreMargin">
                    <Input placeholder="Today's Date..." modifier="underbar"/>
                </div>
            </div>
        )
    }
}

export default InputFeature;