import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch
} from 'react-router-dom';

import './App.scss';
import Mainlayout from './layouts/Mainlayout/Mainlayout';

const App: React.FC = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route component={Mainlayout} path="/mainboard" />
        <Redirect from="/" to="/mainboard/home" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
