import React from 'react';
import { Route, Switch } from 'wouter';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';

//* DEBUG
// import db from "./databases/challenges"
// setTimeout(()=>{
//   db.delete().then(() => {
//     console.log("Database successfully deleted");
//   }).catch((err) => {
//       console.error("Could not delete database");
//   })
// }, 3000);

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/t/:tag">
          <Main />
        </Route>
        <Route path="/c/:title">
          {({title})=>{
           return (
            <div>{title}</div>
           );
          }}
        </Route>
        <Route>
          <h1>404 Error: Path Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;