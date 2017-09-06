import React, { Component } from 'react';
import store from '../store';

class TaskList extends Component {
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
          {this.state.tasks.map(todo => {
            return <li>{todo.tasks}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default TaskList;
