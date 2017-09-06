import React, { Component } from 'react';
import { addTask } from '../actions/task';

class TaskForm extends Component {
  state = {
    task:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addTask({
      task: this.state.task
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
