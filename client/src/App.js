
import './App.css';
import React, { Fragment } from 'react';
import InputTodo from './components/InputTodo';
import List from './components/List';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <List />
      </div>
    </Fragment>
  );
}

export default App;
