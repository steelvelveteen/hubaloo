import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch
} from 'react-router-dom';

import './App.scss';
import Mainlayout from './layouts/Mainlayout/Mainlayout';
import LandingPage from './views/LandingPage/Landing';

const App: React.FC = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route component={LandingPage} path="/landing" />
        <Route component={Mainlayout} path="/mainboard" />
        {/* <Redirect from="/" to="/mainboard/home" /> */}
        <Redirect from="/" to="/landing" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
