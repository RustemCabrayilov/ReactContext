import SiteContext from './Context/SiteContext'
import { useContext } from "react"
function SwitchTheme(){
  const {theme,setTheme}=useContext(SiteContext)
  return(

  <>
    Current language {theme} <br/>
    <button onClick={()=>{setTheme(theme==='light'?'dark':'light')}}>Change theme</button>
  </>
  )
  }
  export default SwitchTheme