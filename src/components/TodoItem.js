import React, { Component } from 'react';
import {removeTodo, completedTodo} from '../actions/todos';

class TodoItem extends Component {
  complete = (e) => {
    completedTodo(this.props.id)
  }

  remove = (e) => {
    removeTodo(this.props.id)
  }

  render() {
    return(
      <li className={this.props.status}>
        {this.props.text} <button onClick={this.remove} className="btn btn-outline-danger btn-sm">Remove</button>
        <button onClick={this.complete} className="btn btn-outline-primary btn-sm">Mark Complete</button>
      </li>
    )
  }
}


export default TodoItem;
