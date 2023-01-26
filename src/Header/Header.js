import React ,{useContext} from 'react';
import'./Header.css';
import { AuthContext } from '../AuthContext';
const Header = () => {
  const authContext = useContext(AuthContext);
  function logout (){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    authContext.setAuth({});

  }
  return (
<nav className="navbar">

    <a className='navbar-brand mb-0 h1' href="k">React Hooks</a>
    <div >
       {authContext.auth.email ? <div>
        {authContext.auth.email} 
         {''} 
        <button className='btn btn-dark h1' onClick={logout}>Log out</button></div> : 'you need to login'} </div>
  
</nav>

  )
}
 
export default Header