import './style.css'
import {Link} from 'react-router-dom'
function Register() {
  return (
    <div className='signup_container'>
        <div className='signup_form'>
            <h2>Sign Up</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Username:</label>
                    <input type="text" name="name" placeholder='Enter Username'/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder='Enter Email'/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder='*********'/>
                </div>
                <button className='signup_btn'>Sign Up</button>
            </form>
            <br /><br />
            <p>Already have an account?</p>
            <Link to="/login"><button>Login</button></Link>
            
        </div>
    </div>
  )
}

export default Register