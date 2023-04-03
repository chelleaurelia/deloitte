import './login.css';
import axios from 'axios';
import AuthContext from '../AuthProvider';
import React, { useRef, useState, useEffect, useContext } from "react";
import Admin from './admin';
import { useNavigate } from 'react-router-dom';
const LOGIN_URL = '/auth';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.]){8,24}$/;

function Login() {
  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const passRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  


  useEffect(() => {
    setErrMsg('');
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({username, password}), {
        headers: { 'Content-Type' : 'application/json'},
        withCredentials: true
      });
      console.log(JSON.stringify(response?.data))
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken});
      setUsername('');
      setPassword('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed')
      }
    }
  }

    return (
      <>
        {success ? (
          <section>
            <h1> YOU ARE LOGGED IN!</h1>
          </section>
        ) : (
          <section className='pagesection'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="loginpage">
                <form className="loginform" onSubmit={handleSubmit}>
                    <label className='loginlabel' htmlFor="username">
                      Username :
                    </label> 
                    <input input type ={'text'} className='input-username' id="uname" useRef={userRef} required />

                    <br></br>

                    <label className='loginlabel' htmlFor="password">
                      Password :
                    </label>
                    <input type ={'password'} className='input-password' id="pass"useRef={passRef}required />

                    <br></br>

                    <button type="submit" className='buttonlogin'
                      ><b>Log In</b>
                    </button>

                    <ul className='menu'>
                      <li className='menulist'><button className='menubutton' onClick={() => navigate('/admin')}>admin</button></li>
                      <li className='menulist'><button className='menubutton' onClick={() => navigate('/seller')}>seller</button></li>
                      <li className='menulist'><button className='menubutton' onClick={() => navigate('/buyer')}>buyer</button></li>
                    </ul>

                </form>
          </div>
        </section>

        )}
      </>
    );
  }
  
  export default Login;
  