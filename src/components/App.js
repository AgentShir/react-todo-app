import React, { Component } from 'react';
import '../styles/App.css';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';

class App extends Component {
  render() {
    return (
      <div>
        <StudentForm />
        <StudentList />
      </div>
    );
  }
}

export default App;
