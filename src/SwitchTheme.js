import { useSite} from './Context'
function SwitchTheme(){
  const {theme,dispatch}=useSite()
  const changeTheme=()=>{
    dispatch({
      type:'Set_theme',
      value:theme==='light'?'dark':'light'
    })
  }
  return(

  <>
    Current language {theme} <br/>
    <button onClick={changeTheme}>Change theme</button>
  </>
  )
  }
  export default SwitchTheme