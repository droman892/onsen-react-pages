import React from 'react';
import {Input, Select} from 'react-onsenui';
import {Checkbox} from 'react-onsenui';
import {Radio} from 'react-onsenui';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';

const Form = (props) =>  {

    

        return (
            <div id="form" className="center-components">
                <form>  
                    <div> 
                    <Input 
                        id="inputText1" 
                        className="coreMargin"
                        placeholder="First Name..." 
                        modifier="material"
                        value={props.firstNameInput}   
                        onChange={(e) => props.setFirstNameInput(e.target.value)}
                        required
                    />
                    </div> 
                    <div>
                    <Input 
                        id="inputText2" 
                        className="coreMargin"
                        placeholder="Last Name..." 
                        modifier="material"
                        value={props.lastNameInput}   
                        onChange={(e) => props.setLastNameInput(e.target.value)}
                        required
                    />
                    </div>
                    <div>
                    <Input 
                        id="inputDate" 
                        className="coreMargin"
                        placeholder="Today's Date..." 
                        modifier="material"
                        value={props.dateInput}   
                        onChange={(e) => props.setDateInput(e.target.value)}
                        required
                    />
                    </div>
                    
                    <div>
                        <p className="bold">I want to:</p>
                    </div>
                    <div id="checkbox1" className="coreMargin">
                        <Checkbox
                            modifier="material"
                            checked={props.checkbox1}
                            onChange={(e) => props.setCheckbox1(e.target.checked)}
                            required
                        /> {props.checkbox1Value}
                    </div>
                    <div id="checkbox2" className="coreMargin">
                        <Checkbox
                            modifier="material"
                            checked={props.checkbox2}
                            onChange={(e) => props.setCheckbox2(e.target.checked)}
                            required
                        /> {props.checkbox2Value}
                    </div>
                    <div id="checkbox3" className="coreMargin">
                        <Checkbox
                            modifier="material"
                            checked={props.checkbox3}
                            onChange={(e) => props.setCheckbox3(e.target.checked)}
                            required
                        /> {props.checkbox3Value}
                    </div>

                    <p className="bold">Send me information about:</p>
                    <div id="radio1" className="coreMargin">
                        <Radio 
                            name="group"
                            value="first"
                            checked={props.radio1Feature} 
                            onChange={(e) => props.setRadio1Feature(e.target.checked)}
                            required  
                            modifier="material"
                        /> Car Loans
                    </div>
                    <div id="radio2" className="coreMargin">
                        <Radio 
                            name="group"
                            value="second"
                            checked={props.radio2Feature} 
                            onChange={(e) => props.setRadio2Feature(e.target.checked)}
                            required 
                            modifier="material"
                        /> Retirement Planning
                    </div>
                    <div id="radio3" className="coreMargin">
                        <Radio 
                            name="group"
                            value="third"
                            checked={props.radio3Feature} 
                            onChange={(e) => props.setRadio3Feature(e.target.checked)}
                            required  
                            modifier="material"
                        /> Mortgages
                    </div>

                    <label className="bold">
                        How Should We Contact You?
                    </label><br></br>
                    <Select 
                        id="selectFeature" 
                        modifier="material"
                        className="coreMargin select-feature"
                        value={props.selectionFeature}
                        onChange={(e) => props.setSelectionFeature(e.target.value)}
                        required
                    >
                        <option value="Text" label="Text" className="center-select"/>
                        <option value="Phone" label="Phone"/>
                        <option value="Email" label="Email"/>
                    </Select>
                    <br></br>
                    <Button 
                        ripple 
                        modifier="large--cta material" 
                        className="button-mod" 
                        onClick={props.manageSubmit}>
                            <Link to="/page2" className="link-mod">
                                Review
                            </Link>
                    </Button>
                </form>
            </div>
        )
}

export default Form;