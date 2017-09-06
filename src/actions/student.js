import store from '../store'

export function addStudent(student){
   store.dispatch({
     type: 'ADD_STUDENT',
     student: student
   })
}
