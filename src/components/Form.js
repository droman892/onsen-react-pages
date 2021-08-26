import React, {useState} from 'react';
import {Input, Select} from 'react-onsenui';
import CheckboxFeature from './CheckboxFeature';
import RadioList from './RadioList';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';

const Form = () =>  {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [date, setDate] = useState('');
        const [selection, setSelection] = useState('');

        const manageSubmit = (e) => {
            e.preventDefault();
            const blog = {firstName, lastName, date, selection};
            console.log(blog);
        }

        return (
            <div id="form" className="center-components">
                <form>    
                    <Input 
                        placeholder="First Name..." 
                        modifier="underbar"
                        value={firstName}   
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <Input 
                        placeholder="Last Name..." 
                        modifier="underbar"
                        value={lastName}   
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <Input 
                        placeholder="Today's Date..." 
                        modifier="underbar"
                        value={date}   
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                    <br></br>
                    




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