import React from 'react';
import {List, ListItem} from 'react-onsenui';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';


const Page2List = () =>  {
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
        )
}

export default Page2List;