import React, { Component } from 'react';
import { addTask } from '../actions/task';

class TaskForm extends Component {
  state = {
    todo:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addTask({
      todo: this.state.todo
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name="task" placeholder="Task" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default TaskForm;
