import React, { Component } from 'react';
import { addTask } from '../actions/task';

class TodoForm extends Component {
  state = {
    value:''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addTask({
      todo: this.state.todo
    })
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
          <input type="text" onChange={this.handleChange} value={this.state.value} name="value" placeholder="Task" />
          <button className="btn btn-outline-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
