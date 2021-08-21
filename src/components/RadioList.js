import React, {Component} from 'react';
import Radio1 from './Radio1';
import Radio2 from './Radio2';
import Radio3 from './Radio3';

class RadioList extends Component {

    render() {
        return (
            <div>
                <Radio1/>
                <Radio2/>
                <Radio3/>
            </div>
        )
    }
}

export default RadioList;