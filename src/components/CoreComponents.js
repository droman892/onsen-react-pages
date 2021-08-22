import React, {Component} from 'react';
import InputFeature from './InputFeature';
import CheckboxFeature from './CheckboxFeature';
import RadioList from './RadioList';
import SelectFeature from './SelectFeature';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';

class CoreComponents extends Component {

    render() {
        return (
            <div id="allComponents" className="center-components">
                <InputFeature/>
                <CheckboxFeature/>
                <RadioList/>
                <SelectFeature/>
                <div id="buttonReview">
                    <Button>
                        <Link to="/page2">Review</Link>
                    </Button>
                </div>
            </div>
        )
    }
}

export default CoreComponents;