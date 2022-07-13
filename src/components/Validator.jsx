import '../styles/Validator.css'

const Validator = (props) => {
  
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input onChange = {props.handleChange} value={props.username} type="text" placeholder="Username" id="username" />
        <label htmlFor="username">Username</label>

        <input onChange = {props.handleChange} value={props.password}type="password" placeholder="Password" id="password" />
        <label htmlFor="password">Password</label>

        <input value={props.passwordConfirm} onChange = {props.handleChange} type="password" placeholder="Confirm password" id="passwordConfirm"/>
        <label htmlFor="passwordConfirm">Confirm password</label>
        
        <button type = "submit" onClick={props.submitForm}>Sign Up</button>
        <button type = 'button' onClick={props.cancelForm}class = 'cancel'>Reset</button>
        <p className = {props.valid}>Passwords must match.</p>  
      </form>
  
    </div>
  )
}

export default Validator
