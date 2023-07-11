import React, { useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify'
import { baseUrl, LOGIN_URL } from '../../constants';


const Sigin = ({useLogOrReg}) => {
    const [userData, setUserData] = useState({email:"", password:""})
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
      const value = e.target.value;
      const name = e.target.name;
      setUserData({...userData, [name]:value});
    }


    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        await axios.post(baseUrl + LOGIN_URL, userData).then( res => {
            if (res.status) {
              sessionStorage.setItem("user", JSON.stringify(res.data.data))
              window.location.reload()
            }else{
            throw new Error("Wrong login or password?")
            }
        }).catch(err => toast.error(`Error! ${err.response.data.error}`, { position: toast.POSITION.TOP_RIGHT })).finally(() => setLoading(false))    
    }
  

  return (
    <div className='login-page'>
        <div class="wrapper-reg">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className='reg-form'>
                <div class="input-box">
                    <input type="text" name='email' value={userData?.email} disabled={loading} onChange={handleChange} placeholder="Enter your login" required />
                </div>
                <div class="input-box">
                    <input type="password" name='password' value={userData?.password} disabled={loading} onChange={handleChange} placeholder="Password" required />
                </div>
                <div class="input-box button">
                    <input type="Submit" value="Login" disabled={loading} />
                </div>
                <div class="text-change">
                    <h3>Don't have an account? <button onClick={() => useLogOrReg(prev => !prev)} type='button'>Register now</button></h3>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Sigin