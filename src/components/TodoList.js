import React, { Component } from 'react';
import store from '../store';
import {connect} from 'react-redux';

class TodoList extends Component {
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
          {this.props.todos.map(todo => {
            return <li>{todo}</li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    todos: appState.todos
  }
}

export default connect(mapStateToProps)(TodoList)
