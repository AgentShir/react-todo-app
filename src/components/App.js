import React, { Component } from 'react';
import '../styles/App.css';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Do Something
          </div>
            <div className="card-body">
            <h4 class="card-title">To Dos</h4>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
