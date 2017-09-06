const initialState = {
  students: []
}

export default function(state = initialState, action){
  switch(action.type) {
    case 'ADD_STUDENT':
      return {...state, students:[...state.students, action.student]}
    default:
      return state
  }
}
