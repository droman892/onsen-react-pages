import React from 'react';
import {Select} from 'react-onsenui';

const SelectFeature = () =>  {
        return (
            <div>
                <label>
                    How Should We Contact You?
                </label><br></br>
                <Select id="selectFeature" className="coreMargin">
                    <option label="Text"/>
                    <option label="Phone"/>
                    <option label="Email"/>
                </Select>

            </div>
        )
}

export default SelectFeature;