import React, {useState} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

const App = () =>  {

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [date, setDate] = useState("");
        const [selection, setSelection] = useState("");
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
                selection,
                getCheckbox1,
                getCheckbox2,
                getCheckbox3,
                getRadio
            };
            console.log(blog);
        }

        const getCheckbox1 = () => {
            if (checkboxCircle1) {
                return "Create a Budget";
            } else
            return "";
        }

        const getCheckbox2 = () => {
            if (checkboxCircle2) {
                return "Learn How to Invest";
            } else
            return "";
        }

        const getCheckbox3 = () => {
            if (checkboxCircle3) {
                return "Decrease My Debt";
            } else
            return "";
        }

        const getRadio = () => {
            if (radio1) {
                return "Car Loans";
            }
            else if (radio2) {
                return "Retirement Planning";
            }
            else if (radio3) {
                return "Mortgages";
            } else
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

                            checkbox1Value={'Create a Budget'}
                            checkbox1 = {checkboxCircle1}
                            setCheckbox1 = {setCheckboxCircle1}

                            checkbox2Value={'Learn How to Invest'}
                            checkbox2 = {checkboxCircle2}
                            setCheckbox2 = {setCheckboxCircle2}

                            checkbox3Value={'Decrease My Debt'}
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

                            checkbox1Value={'Create a Budget'}
                            checkbox1 = {checkboxCircle1}

                            checkbox2Value={'Learn How to Invest'}
                            checkbox2 = {checkboxCircle2}

                            checkbox3Value={'Decrease My Debt'}
                            checkbox3 = {checkboxCircle3}

                            getTheCheckbox1={getCheckbox1()}
                            getTheCheckbox2={getCheckbox2()}
                            getTheCheckbox3={getCheckbox3()}

                            getTheRadio={getRadio()}

                            selectionFeature = {selection}
  

                    /> }/>
                </div>
            </BrowserRouter>

        )
}

export default App;