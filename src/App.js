import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoodsList from './components/GoodsList/GoodsList.js';
import GoodsPage from './components/GoodsPage/GoodsPage.js';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={GoodsList} />
          <Route exact path="/goods/:id" component={GoodsPage} />
        </Switch>
      </Router>

    </div>
  );
}
 