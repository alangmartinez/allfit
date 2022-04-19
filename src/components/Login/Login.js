import './Login.css';
import { useState } from 'react';

export default function Login() {
  const [signUp, setSignUp] = useState(false);


  return (
    <>
        <span className='login'>{signUp ? 'Sign In' : 'Sign Up'}<i className="fa-solid fa-arrow-right-to-bracket ms-2" style={{color: '#fff'}}></i></span>
    </>
  )
}
