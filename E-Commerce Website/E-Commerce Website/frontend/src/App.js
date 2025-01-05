import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import MarketplacePage from './pages/MarketplacePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/marketplace" component={MarketplacePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;