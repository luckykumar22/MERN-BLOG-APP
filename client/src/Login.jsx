import './style.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='signup_container'>
        <div className='signup_form'>
            <h2>Sign In</h2>
            <form action="">
            <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder='Enter Email'/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder='*********'/>
                </div>
                <button className='signup_btn'>Login</button>
            </form>
            <br /><br />
            <p>Do not have an account?</p>
            <Link to="/register"><button>Register</button></Link>
            
        </div>
    </div>
  )
}

export default Login