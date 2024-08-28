export default function reducer(state,action){
  switch (action.type) {
    case 'Set_theme':
    return{
      ...state,
      theme:action.value
    }
     case'Set_language':
     return{
      ...state,
      language:action.value
     }
  
    default:
      break;
  }
}