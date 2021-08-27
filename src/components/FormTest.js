import React from 'react';
import {Input, Select} from 'react-onsenui';
import {Checkbox} from 'react-onsenui';
import {Radio} from 'react-onsenui';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';

const FormTest = (props) =>  {

        return (
            <div id="form" className="center-components">
                <form>  
                    <div> 
                    <Input 
                        id="inputText1" 
                        className="coreMargin"
                        placeholder="First Name..." 
                        modifier="underbar"
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
                        modifier="underbar"
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
                        modifier="underbar"
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
                            value={props.checkbox1}
                            onChange={(e) => props.setCheckbox1(e.target.checked)}
                            required
                        /> Create a Budget
                    </div>
                    <div id="checkbox2" className="coreMargin">
                        <Checkbox
                            value={props.checkbox2}
                            onChange={(e) => props.setCheckbox2(e.target.checked)}
                            required
                        /> Learn How to Invest
                    </div>
                    <div id="checkbox3" className="coreMargin">
                        <Checkbox
                            value={props.checkbox3}
                            onChange={(e) => props.setCheckbox3(e.target.checked)}
                            required
                        /> Decrease My Debt
                    </div>

                    <p className="bold">Send me information about:</p>
                    <div id="radio1" className="coreMargin">
                        <Radio 
                            name="group"
                            value="first"
                            checked={props.radio1Feature} 
                            onChange={(e) => props.setRadio1(e.target.checked)}
                            required  
                            modifier='material'
                        /> Car Loans
                    </div>
                    <div id="radio2" className="coreMargin">
                        <Radio 
                            name="group"
                            value="second"
                            checked={props.radio2Feature} 
                            onChange={(e) => props.setRadio2(e.target.checked)}
                            required 
                            modifier='material'
                        /> Retirement Planning
                    </div>
                    <div id="radio3" className="coreMargin">
                        <Radio 
                            name="group"
                            value="third"
                            checked={props.radio3Feature} 
                            onChange={(e) => props.setRadio3(e.target.checked)}
                            required  
                            modifier='material'
                        /> Mortgages
                    </div>

                    <label className="bold">
                        How Should We Contact You?
                    </label><br></br>
                    <Select 
                        id="selectFeature" 
                        className="coreMargin"
                        value={props.selectionFeature}
                        onChange={(e) => props.setSelectionFeature(e.target.value)}
                        required
                    >
                        <option label="Text"/>
                        <option label="Phone"/>
                        <option label="Email"/>
                    </Select>
                    <br></br>
                    <Button modifier="large--cta" onClick={props.manageSubmit}>
                            <Link to="/page2">
                                Review
                            </Link>
                    </Button>
                </form>
            </div>
        )
}

export default FormTest;