import React from 'react';
import './App.scss';

// Header
import HomepageHeader from './homepage-header/HomepageHeader';
// HomepageContent
import HomepageContent from './homepage-content/HomepageContent';
// SignUp Page
import SignUp from './user-signup/SignUp';

import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      
        <HomepageHeader />

        <Switch>
          <Route path ="/" exact component={HomepageContent} />
          <Route path="/signup" component={SignUp} />
        </Switch> 
      </div>
    </Router>


  );
}



export default App;
