import React, {Component} from 'react';
import ToolbarTop from './ToolbarTop';
import Page2List from './Page2List';
import ToolbarBottom from './ToolbarBottom';

class Page2 extends Component {

    render() {
        return (
            <div id="page2">
                <ToolbarTop/>
                <Page2List/>
                <ToolbarBottom/>
            </div>
        )
    }
}

export default Page2;