import React from 'react';
import {Select} from 'react-onsenui';

const SelectFeature = () =>  {
        return (
            <div>
                <Select id="selectFeature" className="coreMargin">
                    <option>How Should We Contact You?</option>
                    <option>Text</option>
                    <option>Phone</option>
                    <option>Email</option>
                </Select>

            </div>
        )
}

export default SelectFeature;