import React, {useState} from 'react';
import {Input, Select} from 'react-onsenui';
import {Checkbox} from 'react-onsenui';
import {Radio} from 'react-onsenui';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';

const Form = () =>  {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [date, setDate] = useState('');
        const [selection, setSelection] = useState('');
        const [checkboxCircle1, setCheckboxCircle1] = useState(false);
        const [checkboxCircle2, setCheckboxCircle2] = useState(false);
        const [checkboxCircle3, setCheckboxCircle3] = useState(false);
        const [radio, setRadio] = useState(false);
        

        const manageSubmit = (e) => {
            e.preventDefault();
            const blog = {
                firstName, 
                lastName, 
                date, 
                checkboxCircle1, 
                checkboxCircle2, 
                checkboxCircle3, 
                radio,
                selection
            };
            console.log(blog);
        }

        return (
            <div id="form" className="center-components">
                <form>  
                    <div> 
                    <Input 
                        id="inputText1" 
                        className="coreMargin"
                        placeholder="First Name..." 
                        modifier="underbar"
                        value={firstName}   
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    </div> 
                    <div>
                    <Input 
                        id="inputText2" 
                        className="coreMargin"
                        placeholder="Last Name..." 
                        modifier="underbar"
                        value={lastName}   
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    </div>
                    <div>
                    <Input 
                        id="inputDate" 
                        className="coreMargin"
                        placeholder="Today's Date..." 
                        modifier="underbar"
                        value={date}   
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    </div>
                    
                    <div>
                        <p className="bold">I want to:</p>
                    </div>
                    <div id="checkbox1" className="coreMargin">
                        <Checkbox
                            value={checkboxCircle1}
                            onChange={(e) => setCheckboxCircle1(e.target.checked)}
                            required
                        /> Create a Budget
                    </div>
                    <div id="checkbox2" className="coreMargin">
                        <Checkbox
                            value={checkboxCircle2}
                            onChange={(e) => setCheckboxCircle2(e.target.checked)}
                            required
                        /> Learn How to Invest
                    </div>
                    <div id="checkbox3" className="coreMargin">
                        <Checkbox
                            value={checkboxCircle3}
                            onChange={(e) => setCheckboxCircle3(e.target.checked)}
                            required
                        /> Decrease My Debt
                    </div>

                    <p className="bold">Send me information about:</p>
                    <div id="radio1" className="coreMargin">
                        <Radio 
                            name="group"
                            value="first"
                            checked={radio} 
                            onChange={(e) => setRadio(e.target.checked)}
                            required  
                            modifier='material'
                        /> Car Loans
                    </div>
                    <div id="radio2" className="coreMargin">
                        <Radio 
                            name="group"
                            value="second"
                            checked={radio} 
                            onChange={(e) => setRadio(e.target.checked)}
                            required 
                            modifier='material'
                        /> Retirement Planning
                    </div>
                    <div id="radio3" className="coreMargin">
                        <Radio 
                            name="group"
                            value="third"
                            checked={radio} 
                            onChange={(e) => setRadio(e.target.checked)}
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
                        value={selection}
                        onChange={(e) => setSelection(e.target.value)}
                        required
                    >
                        <option label="Text"/>
                        <option label="Phone"/>
                        <option label="Email"/>
                    </Select>
                    <br></br>
                    <Button modifier="large--cta" onClick={manageSubmit}>
                            <Link to="/page2">
                                Review
                            </Link>
                    </Button>
                </form>
            </div>
        )
}

export default Form;