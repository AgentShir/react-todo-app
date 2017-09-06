const initialState = {
  tasks: []
}

export default function(state = initialState, action){
  switch(action.type) {
    case 'ADD_TASK':
      return {...state, tasks:[...state.tasks, action.todo]}
    default:
      return state
  }
}
