const initialState = {
  todos: []
}

export default function(state = initialState, action){
  switch(action.type) {
    case 'ADD_TODO':
      return {...state, todos:[action.todo, ...state.todos]}
    default:
      return state
  }
}
