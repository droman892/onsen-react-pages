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

        const manageSubmit = (e) => {
            e.preventDefault();
            const blog = {
                firstName, 
                lastName, 
                date, 
                checkboxCircle1, 
                checkboxCircle2, 
                checkboxCircle3, 
                radio1,
                radio2,
                radio3,
                selection
            };
            console.log(blog);
        }

       

        function getInfoAbout() {
            if (radio1) {
                return "NAME HERE";
            }
            if (radio2) {
                return "NIceeeeee";
            }
            if (radio3) {
                return "wowwwww";
            }
            return "";
        }

        return (
            <BrowserRouter>
                <div id="appComponent" className="page-layout">
                    <Route exact path="/" render={() => 
                        <Page1
                            firstNameInput = {firstName}
                            setFirstNameInput = {setFirstName}

                            lastNameInput = {lastName}
                            setLastNameInput = {setLastName}

                            dateInput = {date}
                            setDateInput = {setDate}

                            checkbox1 = {checkboxCircle1}
                            setCheckbox1 = {setCheckboxCircle1}

                            checkbox2 = {checkboxCircle2}
                            setCheckbox2 = {setCheckboxCircle2}

                            checkbox3 = {checkboxCircle3}
                            setCheckbox3 = {setCheckboxCircle3}

                            radio1Feature = {radio1}
                            setRadio1Feature = {setRadio1}

                            radio2Feature = {radio2}
                            setRadio2Feature = {setRadio2}

                            radio3Feature = {radio3}
                            setRadio3Feature = {setRadio3}

                            selectionFeature = {selection}
                            setSelectionFeature = {setSelection}

                            submitAction = {manageSubmit}
                        /> 
                        }
                    />
                    <Route path="/page2" render={() => 
                        <Page2
                        firstNameInput = {firstName}
                            setFirstNameInput = {setFirstName}

                            lastNameInput = {lastName}

                            dateInput = {date}


                            checkbox1 = {checkboxCircle1}


                            checkbox2 = {checkboxCircle2}


                            checkbox3 = {checkboxCircle3}


                            infoAbout={getInfoAbout()}


                            selectionFeature = {selection}
  

                    /> }/>
                </div>
            </BrowserRouter>

        )
}

export default App;