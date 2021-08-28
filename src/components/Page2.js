import React from 'react';
import ToolbarTop from './ToolbarTop';
import {List, ListItem} from 'react-onsenui';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';
import ToolbarBottom from './ToolbarBottom';

const Page2 = (props) =>  {

    console.log(props)

        return (
            <div id="page2">
                <ToolbarTop/>
                <List id="displayComponents" className="center-components">
                    <ListItem>
                        First Name: {props.firstNameInput}
                    </ListItem>
                    <ListItem>
                        Last Name: {props.lastNameInput}
                    </ListItem>
                    <ListItem>
                        Date: {props.dateInput}
                    </ListItem>
                    <ListItem>
                        You Want to: <br></br>
                        {props.getTheCheckbox1}
                        {props.getTheCheckbox2}
                        {props.getTheCheckbox3}
                    </ListItem>
                    <ListItem>
                    Send You Information About: <br></br>
                        {props.getTheRadio}
                    </ListItem>
                    <ListItem>
                        Mode of Contact: {props.selectionFeature}
                    </ListItem>
                    <div id="buttonBack">
                        <Button>
                            <Link to="/">Back</Link>
                        </Button>
                    </div>
                    <div id="buttonSubmit">
                        <Button>
                        <Link to="/page2">Submit</Link>
                        </Button>
                    </div>
                </List>
                <ToolbarBottom/>
            </div>
        )
}

export default Page2;