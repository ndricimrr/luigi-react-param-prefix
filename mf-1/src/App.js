import logo from './logo.svg';
import './App.css';
import Sample1 from './views/sample1';
import Sample2 from './views/sample2';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <Route exact path="/" component={Sample1} />
      <Route exact path="/haushalt/:id1/test/:id2/test/:id3/:id4/:id5/:id6/:id7/:id8/:id9/:id10/:id11/:id12/:id13" component={Sample2} />
    </BrowserRouter>
  );
}

export default App;
