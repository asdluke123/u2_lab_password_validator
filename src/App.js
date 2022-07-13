import Validator from "./components/Validator"
import { useState } from "react"
const App = () => {
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [passwordConfirm,setPasswordConfirm] = useState('')
const [valid,setValid] = useState(null)
const [validText,setValidText] = useState('')
const handleChange = (e)=>{
  if(e.target.id === 'username'){
    setUsername(e.target.value)
  }
  else if(e.target.id === 'password'){
    setPassword(e.target.value)
  }
  else if(e.target.id === 'passwordConfirm'){
    setPasswordConfirm(e.target.value)
  }
}
const submitForm = (e) =>{
  e.preventDefault();
  if(password.length>7 && passwordConfirm.length>7){
    if(password === passwordConfirm){
    setValid('valid')
    setValidText('Thank you, you are all signed up!')}
  }else{
    setValid('invalid')
    setValidText('Please match you password,try again')
  }
}

const cancelForm = () =>{
  setPassword('')
  setUsername('')
  setPasswordConfirm('')
}
  return (
    <Validator username={username} password={password} passwordConfirm={passwordConfirm} validText={validText} valid={valid} handleChange={handleChange} submitForm={submitForm} cancelForm = {cancelForm}/>
  )
}

export default App
