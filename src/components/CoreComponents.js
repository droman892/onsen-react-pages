import React, {Component} from 'react';
import InputTextFeature from './InputTextFeature';
import InputDate from './InputDate';
import CheckboxFeature from './CheckboxFeature';
import RadioList from './RadioList';
import SelectFeature from './SelectFeature';
import ButtonSubmit from './ButtonSubmit';

class CoreComponents extends Component {

    render() {
        return (
            <div id="allComponents" className="center-components">
                <InputTextFeature/>
                <InputDate/>
                <CheckboxFeature/>
                <RadioList/>
                <SelectFeature/>
                <ButtonSubmit/>
            </div>
        )
    }
}

export default CoreComponents;