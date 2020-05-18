import React from 'react';
import logo from './logo.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './About';
import Episodes from './Episodes';
import Gallery from './Gallery';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Variety is the spice of life, even if you only have rice
        </p>
        
      </header>
    
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="episodes" component={Episodes} />
              <Route exact path="gallery" component={Gallery} />
            </Switch>
          </Router>
        </Layout>  
      </React.Fragment>
    </div>
  );
}

export default App;
