import React from 'react';
import ToolbarTop from './ToolbarTop';
import CoreComponents from './CoreComponents';
import ToolbarBottom from './ToolbarBottom';

const Page1 = () => {
        return (
            <div id="page1">
                <ToolbarTop/>
                <CoreComponents/>
                <ToolbarBottom/>
            </div>
        )
}

export default Page1;