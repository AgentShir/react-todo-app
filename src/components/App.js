import React, { Component } from 'react';
import '../styles/App.css';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import {Provider} from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="card">
            <div className="card-header">
              <h1>Do Something</h1>
            </div>
              <div className="card-body">
              <h4 className="card-title">To Dos</h4>
              <TodoForm />
              <TodoList />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
