import React, {Component} from 'react';
import InputText from './InputText';
import InputDate from './InputDate';
import CheckboxFeature from './CheckboxFeature';
import RadioList from './RadioList';
import SelectFeature from './SelectFeature';
import ButtonNavigator from './ButtonNavigator';


class Page1 extends Component {


    render() {
        return (
            <div>
                <InputText/>
                <InputDate/>
                <CheckboxFeature/>
                <RadioList/>
                <SelectFeature/>
                <ButtonNavigator/>
            </div>
        )
    }
}

export default Page1;