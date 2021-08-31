import React, {useState} from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import {
    BrowserRouter,
    Route
} from "react-router-dom";

const App = () =>  {

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [date, setDate] = useState("");
        const [selection, setSelection] = useState("Select a Value");
        const [checkboxCircle1, setCheckboxCircle1] = useState(false);
        const [checkboxCircle2, setCheckboxCircle2] = useState(false);
        const [checkboxCircle3, setCheckboxCircle3] = useState(false);
        const [radio, setRadio] = useState(0);
        console.log(radio);
        const manageSubmit = (e) => {
            e.preventDefault();

            // This blog object is for future functionality to store form data in a database
            const formData = {
                firstName, 
                lastName, 
                date, 
                checkboxCircle1, 
                checkboxCircle2, 
                checkboxCircle3, 
                radio,
                selection,
                getCheckbox1,
                getCheckbox2,
                getCheckbox3,
                getRadio
            };
            console.log(formData);
        }

        const getCheckbox1 = () => {
            if (checkboxCircle1) {
                return "Create a Budget";
            } 
            return "";
        }

        const getCheckbox2 = () => {
            if (checkboxCircle2) {
                return "Learn How to Invest";
            } 
            return "";
        }

        const getCheckbox3 = () => {
            if (checkboxCircle3) {
                return "Decrease My Debt";
            } 
            return "";
        }

        const getRadio = () => {
            if (radio === 1) {
                return "Car Loans"; 
            }
            if (radio === 2) {
                return "Retirement Planning";
            }
            if (radio === 3) {
                return "Mortgages";
            } 
            return "";
        } 

        return (
            <BrowserRouter basename="/onsen-react-pages">
                <div id="appComponent" className="page-layout">
                    <Route exact path="/" render={() => 
                        <Page1
                            firstNameInput = {firstName}
                            setFirstNameInput = {setFirstName}

                            lastNameInput = {lastName}
                            setLastNameInput = {setLastName}

                            dateInput = {date}
                            setDateInput = {setDate}

                            checkbox1Value={"Create a Budget"}
                            checkbox1 = {checkboxCircle1}
                            setCheckbox1 = {setCheckboxCircle1}

                            checkbox2Value={"Learn How to Invest"}
                            checkbox2 = {checkboxCircle2}
                            setCheckbox2 = {setCheckboxCircle2}

                            checkbox3Value={"Decrease My Debt"}
                            checkbox3 = {checkboxCircle3}
                            setCheckbox3 = {setCheckboxCircle3}

                            radio1Feature = {radio === 1}
                            setRadio1Feature = {() => setRadio(1)}

                            radio2Feature = {radio === 2}
                            setRadio2Feature = {() => setRadio(2)}

                            radio3Feature = {radio === 3}
                            setRadio3Feature = {() => setRadio(3)}

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

                            checkbox1Value={"Create a Budget"}
                            checkbox1 = {checkboxCircle1}

                            checkbox2Value={"Learn How to Invest"}
                            checkbox2 = {checkboxCircle2}

                            checkbox3Value={"Decrease My Debt"}
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