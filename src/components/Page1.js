import React from 'react';
import ToolbarTop from './ToolbarTop';
import FormTest from './FormTest';
import ToolbarBottom from './ToolbarBottom';

const Page1 = (props) => {
        return (
            <div id="page1">
                <ToolbarTop/>
                <FormTest
                    firstNameInput = {props.firstNameInput}
                    setFirstNameInput = {props.setFirstName}

                    lastNameInput = {props.lastName}
                    setLastNameInput = {props.setLastName}

                    dateInput = {props.date}
                    setDateInput = {props.setDate}

                    checkbox1 = {props.checkboxCircle1}
                    setCheckbox1 = {props.setCheckboxCircle1}

                    checkbox2 = {props.checkboxCircle2}
                    setCheckbox2 = {props.setCheckboxCircle2}

                    checkbox3 = {props.checkboxCircle3}
                    setCheckbox3 = {props.setCheckboxCircle3}

                    radio1Feature = {props.radio1}
                    setRadio1Feature = {props.setRadio1}

                    radio2Feature = {props.radio2}
                    setRadio2Feature = {props.setRadio2}

                    radio3Feature = {props.radio3}
                    setRadio3Feature = {props.setRadio3}

                    selectionFeature = {props.selection}
                    setSelectionFeature = {props.setSelection}

                    submitAction = {props.manageSubmit}
                />    
                <ToolbarBottom/>
            </div>
        )
}

export default Page1;