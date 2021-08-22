import React, {Component} from 'react';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';

class ButtonBack extends Component {

    render() {
        return (
            <div id="buttonBack">
                <Button><Link to="/">Back</Link></Button>
            </div>
        )
    }
}

export default ButtonBack;