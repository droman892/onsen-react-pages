import React, {Component} from 'react';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';

class ButtonReview extends Component {

    render() {
        return (
            <div id="buttonReview">
                <Button><Link to="/page2">Review</Link></Button>
            </div>
        )
    }
}

export default ButtonReview;