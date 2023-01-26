
import './App.css';
import React ,{useContext} from 'react';
 import Header from './Header/Header';
import Login from './Login/Login';
import {AuthContext, AuthProvider} from './AuthContext';


function App() {
  const authContext = useContext(AuthContext)
  return (
    <div className="container welcome">
         <Header/>
         { authContext.auth.email ? 'welcome': <Login/> }
         
    </div>
  )
}
function AppWithStore(){
  return (
<AuthProvider> <App/></AuthProvider>
 )
}
export default AppWithStore;
