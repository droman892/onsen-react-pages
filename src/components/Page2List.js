import React, {Component} from 'react';
import {List, ListItem} from 'react-onsenui';
import ButtonBack from './ButtonBack';
import ButtonSubmit from './ButtonSubmit';


class Page2List extends Component {

    render() {
        return (
            <List id="displayComponents" className="center-components">
                <ListItem>
                    First Name:
                </ListItem>
                <ListItem>
                    Last Name:
                </ListItem>
                <ListItem>
                    Date:
                </ListItem>
                <ListItem>
                    You Want to:
                </ListItem>
                <ListItem>
                    Send You Information About:
                </ListItem>
                <ListItem>
                    Mode of Contact:
                </ListItem>
                <ButtonBack/>
                <ButtonSubmit/>
            </List>
        )
    }
}

export default Page2List;