import {useSite} from './Context'
function SwitchLanguage(){
const {language,dispatch}=useSite()
const changeLanguage=()=>{
dispatch({
  type:'Set_language',
  value:language==='tr'?'en':'tr'
})
}
  return(

  <>
    Current language {language} <br/>
    <button onClick={changeLanguage}>Change Language</button>
  </>
)
}
export default SwitchLanguage