export default function reducer(state,action){
  switch (action.type) {
    case 'Log_In':
      return{
        ...state,
        user:action.value
      }
     
    case 'Log_Out':
      return{
        ...state,
        user:false
      }
     
  
    default:
      break;
  }
}