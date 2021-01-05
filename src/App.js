import React from 'react'
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header'
import Footer from './Footer/Footer';
import { Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage/SearchPage';


function App() {
  return (
    <div className="app">

      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/search'>
          <SearchPage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
