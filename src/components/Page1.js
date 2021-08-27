import React from 'react';
import ToolbarTop from './ToolbarTop';
import FormTest from './FormTest';
import ToolbarBottom from './ToolbarBottom';

const Page1 = (props) => {
        return (
            <div id="page1">
                <ToolbarTop/>
                <FormTest/>
                <ToolbarBottom/>
            </div>
        )
}

export default Page1;