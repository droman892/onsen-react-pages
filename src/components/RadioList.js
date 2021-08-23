import React, {useState} from 'react';
import {Radio} from 'react-onsenui';

const RadioList = () =>  {
        
        const [checkRadio, setCheckRadio] = useState(false)

        return (
            <div>
                <p className="bold">Send me information about:</p>
                <div id="radio1" className="coreMargin">
                    <Radio 
                        checked={checkRadio} 
                        onChange={event => { setCheckRadio(true)}}  
                        modifier='material'
                    /> Car Loans
                </div>
                <div id="radio2" className="coreMargin">
                    <Radio 
                        checked={checkRadio} 
                        onChange={event => { setCheckRadio(true)} } 
                        modifier='material'
                    /> Retirement Planning
                </div>
                <div id="radio3" className="coreMargin">
                    <Radio 
                        checked={checkRadio} 
                        onChange={event => { setCheckRadio(true)}}  
                        modifier='material'
                    /> Mortgages
            </div>
            </div>
        )
}

export default RadioList;