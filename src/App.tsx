import React from 'react';
import { Route } from 'wouter';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Main />
      </Route>
    </div>
  );
}

export default App;
