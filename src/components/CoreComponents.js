import React from 'react';
import InputFeature from './InputFeature';
import CheckboxFeature from './CheckboxFeature';
import RadioList from './RadioList';
import SelectFeature from './SelectFeature';
import {Button} from 'react-onsenui';
import {Link} from 'react-router-dom';

const CoreComponents = () =>  {
        return (
            <div id="allComponents" className="center-components">
                
                <form>    
                    <InputFeature/>
                    <CheckboxFeature/>
                    <RadioList/>
                    <SelectFeature/>
                    <div id="buttonReview">
                        <Button type="submit">
                            <Link to="/page2">Review</Link>
                        </Button>
                    </div>
                </form>
            </div>
        )
}

export default CoreComponents;