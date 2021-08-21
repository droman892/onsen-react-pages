import React, {Component} from 'react';
import Page1 from './Page1';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div id="appComponent" className="page-layout">
                    <Route path="/" component={Page1}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;