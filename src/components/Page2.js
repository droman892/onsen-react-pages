import React from 'react';
import ToolbarTop from './ToolbarTop';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';
import ToolbarBottom from './ToolbarBottom';

const Page2 = (props) =>  {

    console.log(props)

        return (
            <div id="page2">
                <ToolbarTop/>
                <div id="displayComponents" className="center-components">
                    <div>
                    <p className="bold">First Name:</p> {props.firstNameInput}
                    </div>
                    <div>
                    <p className="bold">Last Name:</p> {props.lastNameInput}
                    </div>
                    <div>
                    <p className="bold">Date:</p> {props.dateInput}
                    </div>
                    <div>
                        <div>
                            <p className="bold">I want to:</p>
                        </div>
                        <div>{props.getTheCheckbox1}</div>
                        <div>{props.getTheCheckbox2}</div>
                        <div>{props.getTheCheckbox3}</div>
                    </div>
                    <div>
                    <div>
                        <p className="bold">Send You Information About:</p>
                    </div> 
                        {props.getTheRadio}
                    </div>
                    <div>
                    <p className="bold">Mode of Contact: </p>
                        {props.selectionFeature}
                    </div>
                    <br></br>
                    <div id="buttonBack">
                        <Button modifier="large--cta">
                            <Link to="/" className="button-mod">Back</Link>
                        </Button>
                    </div>
                    <div id="buttonSubmit">
                        <Button modifier="large--cta">
                        <Link to="/page2" className="button-mod">Submit</Link>
                        </Button>
                    </div>
                </div>
                <ToolbarBottom/>
            </div>
        )
}

export default Page2;