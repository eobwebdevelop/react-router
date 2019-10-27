import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import History from './History';

class App extends Component {
    render() {
        return (
       
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/our-story" component={History} />
              </Switch>
            </BrowserRouter>
        );
    }
}

export default App;