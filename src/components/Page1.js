import React from 'react';
import ToolbarTop from './ToolbarTop';
import FormTest from './FormTest';
import ToolbarBottom from './ToolbarBottom';

const Page1 = (props) => {


    console.log('inside page 1 ', props.checkbox1)

        return (
            <div id="page1">
                <ToolbarTop/>
                <FormTest
                    firstNameInput = {props.firstNameInput}
                    setFirstNameInput = {props.setFirstNameInput}


                    lastNameInput = {props.lastName}
                    setLastNameInput = {props.setLastNameInput}

                    dateInput = {props.date}
                    setDateInput = {props.setDateInput}

                    checkbox1 = {props.checkbox1}
                    setCheckbox1 = {props.setCheckbox1}

                    checkbox2 = {props.checkbox2}
                    setCheckbox2 = {props.setCheckbox2}

                    checkbox3 = {props.checkbox3}
                    setCheckbox3 = {props.setCheckbox3}

                    radio1Feature = {props.radio1Feature}
                    setRadio1Feature = {props.setRadio1Feature}

                    radio2Feature = {props.radio2Feature}
                    setRadio2Feature = {props.setRadio2Feature}

                    radio3Feature = {props.radio3Feature}
                    setRadio3Feature = {props.setRadio3Feature}

                    selectionFeature = {props.selectionFeature}
                    setSelectionFeature = {props.setSelectionFeature}

                    submitAction = {props.manageSubmit}
                />    
                <ToolbarBottom/>
            </div>
        )
}

export default Page1;