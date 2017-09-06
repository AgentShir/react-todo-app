import store from '../store'

export function addTask(todo){
   store.dispatch({
     type: 'ADD_TASK',
     todo: todo
   })
}
