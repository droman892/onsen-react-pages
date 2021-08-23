import React, {Component} from 'react';
import {Radio} from 'react-onsenui';

class RadioList2 extends Component {
  render() {
    return (
    <div>
    <Radio
    onChange={event => { this.setState({checked: event.target.checked})} }
    modifier='material' />
    
    <Radio
    onChange={event => { this.setState({checked: event.target.checked})} }
    modifier='material' />

    </div>

    );
  }
}

export default RadioList2;