import React, {Component} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div id="appComponent" className="page-layout">
                    <Route exact path="/" render={() => <Page1 title={"Hashtag"} age={27}/> }/>
                    <Route path="/page2" render={() => <Page2/> }/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;