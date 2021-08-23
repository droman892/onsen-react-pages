import React, {Component} from 'react';
import ToolbarTop from './ToolbarTop';
import CoreComponents from './CoreComponents';
import ToolbarBottom from './ToolbarBottom';

class Page1 extends Component {

    sendData = () => {
        this.props.parentCallBack("Woah it worked!");
    }

    render() {
        return (
            <div id="page1">
                <ToolbarTop/>
                <CoreComponents
                    
                />
                <ToolbarBottom/>
            </div>
        )
    }
}

export default Page1;