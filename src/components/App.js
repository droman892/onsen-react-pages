import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

const App = () =>  {

        // form data

        return (
            <BrowserRouter>
                <div id="appComponent" className="page-layout">
                    <Route exact path="/" render={() => 
                        <Page1 
                            
                            // firstNamePlaceholder={'First Name...it worked!'}
                            // lastNamePlaceholder={'Last Name...'}
                            
                        /> }
                    />
                    <Route path="/page2" render={() => <Page2/> }/>
                </div>
            </BrowserRouter>

        )
}

export default App;