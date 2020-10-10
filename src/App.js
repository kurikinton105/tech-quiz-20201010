import React from 'react';
import Top from './screens/Top';
import Navbar from './components/Navbar';
import Quiz from './screens/Quiz';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/quiz" component={Quiz} />
          <Route render={() => <h4>not found...</h4>} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
