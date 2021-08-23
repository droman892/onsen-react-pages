import React from 'react';
import {Input} from 'react-onsenui';


const InputFeature = () =>  {
        return (
            <div id="inputFeature">
                <div id="inputText1" className="coreMargin">
                    <Input placeholder="First Name..." modifier="underbar"/>
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

export default InputFeature;