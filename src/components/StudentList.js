import React, { Component } from 'react';
import store from '../store';

class StudentList extends Component {
  state = {
    students:[]
  }

  componentWillMount() {
    store.subscribe(() => {
      const appState = store.getState()
      this.setState({
        students: appState.students
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.students.map(student => {
            return <li>{student.fname} {student.lname}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default StudentList;
