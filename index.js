import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ContactForm from './Components/ContactForm';
class App extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  render() {
    return (
      <div className="container">
      <h1 className="alert alert-info">Using refs uncontroll component</h1>
      <div className="row">
      <div className="col">
      <ContactForm />
      </div>
      <div className="col"></div>
      </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
