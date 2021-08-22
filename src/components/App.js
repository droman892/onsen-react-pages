import React, {Component} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

class App extends Component {

    state = {
        firstName: ""
    }

    callbackFunction = (inputFirstName) => {
        this.setState({
            firstName: inputFirstName
        })
    }



    render() {
        return (
            <BrowserRouter>
                <div id="appComponent" className="page-layout">
                    <Route exact path="/" render={() => <Page1 parentCallBack = {this.callbackFunction}/> }/>
                    <Route path="/page2" render={() => <Page2/> }/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;