import "./style.css";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar-header">
      <div>
        <h3>Blog</h3>
      </div>
      <div >
        <a className="link" href="">Home</a>
        <a className="link" href="">Create</a>
        <a className="link" href="">Contact</a>
      </div>
      <div>
        <h5><Link to='/register' className="link">Register/Login</Link></h5>
      </div>
    </div >
  );
}

export default Navbar;
