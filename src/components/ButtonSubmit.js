import React, {Component} from 'react';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';

class ButtonSubmit extends Component {

    render() {
        return (
            <div id="buttonSubmit">
                <Button><Link to="/page2">Submit</Link></Button>
            </div>
        )
    }
}

export default ButtonSubmit;