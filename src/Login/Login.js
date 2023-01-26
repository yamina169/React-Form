import React ,{useState,useContext}from 'react'
import { AuthContext } from '../AuthContext';
import'./Login.css'

const Login = () => {
    const [ email,setEmail]=useState('');
    const [ pasword,setPasword]=useState('');
    const authContext = useContext(AuthContext);

    function login (e){
        e.preventDefault();
        if(pasword === '123'){
            const token ='abc';
            localStorage.setItem('token',token);
            localStorage.setItem('email',email);
                authContext.setAuth ({token,email})  ; 
            }else{
                alert('wrong details');
            }
        }
     
   return (
   <form>
    <h2 className='form-h2'>Login</h2>
    <input className='form-control' placeholder='email' type='email' value={email} onChange={e=>setEmail(e.target.value)}/>
   <br/>
    <input className='form-control' placeholder='pasword' type='pasword' value={pasword}onChange={e=>setPasword(e.target.value)} />
    <br/>
<button className='btn btn-primary form-button' onClick={login}>Login</button>
   </form>
  );
}

export default Login