import React, { Component } from 'react';
import store from '../store';

class ToDoList extends Component {
  state = {
    tasks:[]
  }

  componentWillMount() {
    store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        tasks: appState.tasks
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todo.map(todo => {
            return <li>{tasks.todo}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
