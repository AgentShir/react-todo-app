import React, { Component } from 'react';
import { addStudent } from '../actions/student';

class StudentForm extends Component {
  state = {
    fname:'',
    lname:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addStudent({
      fname: this.state.fname,
      lname: this.state.lname
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name="fname" placeholder="First Name" />
          <input type="text" onChange={this.handleChange} name="lname" placeholder="Last Name" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default StudentForm;
