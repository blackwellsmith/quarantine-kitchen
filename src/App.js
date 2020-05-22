import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import Episodes from './Episodes';
import Gallery from './Gallery';
import Layout from './Layout';
import Navigation from './NavBar'

function App() {
  return (
    
    
      <React.Fragment> 
        <Navigation/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/episodes" component={Episodes} />
              <Route exact path="/gallery" component={Gallery} />
            </Switch>
          </Router>
        </Layout>  
      </React.Fragment>
   
  );
}

export default App;
