import React, { Component } from 'react';
import { addTodo } from '../actions/todos';

class TodoForm extends Component {
  state = {
    value:''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addTodo(this.state.value)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.value} name="value" placeholder="Enter a To Do!" />
          <button className="btn btn-outline-primary btn-sm" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
