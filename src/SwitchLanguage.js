import SiteContext from './Context/SiteContext'
import { useContext } from "react"

function SwitchLanguage(){
const {language,setLanguage}=useContext(SiteContext)
  return(

  <>
    Current language {language} <br/>
    <button onClick={()=>setLanguage(language==='tr'?'en':'tr')}>Change Language</button>
  </>
)
}
export default SwitchLanguage