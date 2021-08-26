import React, {useState} from 'react';
import {Input} from 'react-onsenui';


const InputFeature2 = () =>  {
        
        const [input, setInput] = useState("")
    
        const formInputs() {
            setInput(prevInput => prevInput + )
        }

        return (
            <div id="inputFeature">
                <div id="inputText1" className="coreMargin">
                    <Input 
                    type="text"
                    required
                    placeholder="First Name..." 
                    modifier="underbar" 
                    firstName={input}
                    onChange={formInputs}
                />
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

export default InputFeature2;