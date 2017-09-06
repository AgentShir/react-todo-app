import React, { Component } from 'react';
import {removeTodo} from '../actions/todos';

class TodoItem extends Component {
  handleClick = (e) => {
    removeTodo(this.props.id)
  }

  render() {
    return(
      <li>
        {this.props.text} <button className="btn btn-outline-primary" onClick={this.handleClick}>Remove</button>
      </li>
    )
  }
}


export default TodoItem;
