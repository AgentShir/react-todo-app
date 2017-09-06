import React, { Component } from 'react';
import '../styles/App.css';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
