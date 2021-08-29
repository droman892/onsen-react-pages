import React, {useState} from "react";
import ToolbarTop from "./ToolbarTop";
import {Button, Toast} from "react-onsenui";
import {Link} from "react-router-dom";
import ToolbarBottom from "./ToolbarBottom";

const Page2 = (props) =>  {

    console.log(props)

    const [toastFeature, setToastFeature] = useState(false);

        return (
            <div id="page2">
                <ToolbarTop/>
                <div id="displayComponents" className="center-components max-size">
                    <div>
                        <p className="bold">First Name:</p> 
                        {props.firstNameInput}
                    </div>
                    <div>
                        <p className="bold">Last Name:</p> 
                        {props.lastNameInput}
                    </div>
                    <div>
                        <p className="bold">Date:</p> 
                        {props.dateInput}
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
                    <div id="buttonSubmit">
                        <Button 
                            ripple modifier="large--cta material" 
                            className="button-mod button-margin"
                            onClick={() => setToastFeature(true)}>
                            <Link to="/page2" className="link-mod">Submit</Link>
                        </Button>
                    </div> 
                    <span className="br"></span>
                    <div id="buttonBack">
                        <Button 
                            ripple modifier="large--cta material" 
                            className="button-mod">
                            <Link to="/" className="link-mod">Back</Link>
                        </Button>
                    </div>
                </div>
                <ToolbarBottom/>
                <Toast 
                    id="myToast" 
                    animation="ascend" 
                    modifier="material"
                    isOpen={toastFeature}>
                    <p className="toasty">Thanks for your submission!</p>
                    <button 
                        onClick={() => setToastFeature(false)}>
                        X
                    </button>
                </Toast>     
            </div>
        )
}

export default Page2;