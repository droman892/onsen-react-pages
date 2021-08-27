import React, {useState} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

const App = () =>  {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [date, setDate] = useState('');
        const [selection, setSelection] = useState('');
        const [checkboxCircle1, setCheckboxCircle1] = useState(false);
        const [checkboxCircle2, setCheckboxCircle2] = useState(false);
        const [checkboxCircle3, setCheckboxCircle3] = useState(false);
        const [radio1, setRadio1] = useState(false);
        const [radio2, setRadio2] = useState(false);
        const [radio3, setRadio3] = useState(false);

        return (
            <BrowserRouter>
                <div id="appComponent" className="page-layout">
                    <Route exact path="/" render={() => 
                        <Page1
                            firstName = {firstName}
                        /> 
                        }
                    />
                    <Route path="/page2" render={() => <Page2/> }/>
                </div>
            </BrowserRouter>

        )
}

export default App;