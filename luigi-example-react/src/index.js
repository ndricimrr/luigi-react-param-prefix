import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home.js';
import Sample1 from './views/sample1.js';
import Sample2 from './views/sample2.js';

import { addInitListener } from '@luigi-project/client';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    addInitListener(() => {
      console.log('Luigi Client initialized.');
    });
  }
  render() {
    return (
      <BrowserRouter basename={`sampleapp.html#`}>
        <Route path="/home" component={Home} />
        <Route exact path="/haushalt" component={Sample1} />
        <Route exact path="/haushalt/:id1/test/:id2/test/:id3/:id4/:id5/:id6/:id7/:id8/:id9/:id10/:id11/:id12/:id13" component={Sample2} />
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
