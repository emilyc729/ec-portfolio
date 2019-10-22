import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
      </header>
      <Switch>
        <Route exact path="/ec-portfolio" component={About} />
        <Route exact path="/ec-portfolio/projects" component={Projects} />
        <Route exact path="/ec-portfolio/contact" component={Contact} />
        <Route render={() => 
          <section className="container">
          <h1>Error 404: PageNotFound</h1>
          </section>
        } />
      </Switch>
    </div>
  );
}

export default App;
