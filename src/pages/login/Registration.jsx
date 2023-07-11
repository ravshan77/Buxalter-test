import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { baseUrl, REGESTER_URL } from "../../constants";

const Registration = ({useLogOrReg}) => {
    const [userData, setUserData] = useState({first_name:"", last_name:"", middle_name:"", sur_name:"", phone_number:"", company_name:"", email:"", password:""})
    const [loading, setLoading] = useState(false)
    const handleChange = e => {
      const value = e.target.value;
      const name = e.target.name;
      setUserData({...userData, [name]:value});
    }

    const handleReg = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post(baseUrl + REGESTER_URL, userData).then( res => {
          if (res.status) {
            toast.success('Account created.  Please login again!', { position: toast.POSITION.TOP_RIGHT, autoClose: 4000 })
            useLogOrReg(prev => !prev)
            setUserData({})
          }else{
            throw new Error("Server error")
          }
        }).catch(err => toast.error(`Error! ${err.response.data.error}`, { position: toast.POSITION.TOP_RIGHT })).finally(() => setLoading(false))
    }

    
  return (
    <div className="reg-page">
      <div class="reg-container">
        <div class="title">Registration</div>
        <div class="content">
          <form onSubmit={handleReg}>
            <div class="user-details">
              <div class="input-box">
                <span class="details">First Name *</span>
                <input type="text" name="first_name" value={userData?.first_name} disabled={loading} onChange={handleChange} placeholder="" required />
              </div>
              <div class="input-box">
                <span class="details">Surname *</span>
                <input type="text" name="sur_name" value={userData?.sur_name} disabled={loading} onChange={handleChange} placeholder="" required />
              </div>
              <div class="input-box">
                <span class="details">Middle Name *</span>
                <input type="text" name="middle_name" value={userData?.middle_name} disabled={loading} onChange={handleChange} placeholder="" required />
              </div>
              <div class="input-box">
                <span class="details">Company Name *</span>
                <input type="text" name="company_name" value={userData?.company_name} disabled={loading} onChange={handleChange} placeholder="" required />
              </div>
              <div class="input-box">
                <span class="details">Phone Number *</span>
                <input type="tel" name="phone_number" value={userData?.phone_number} disabled={loading} onChange={handleChange} placeholder="+998" required />
              </div>
              <div class="input-box">
                <span class="details">Email *</span>
                <input type="email" name="email" value={userData?.email} disabled={loading} onChange={handleChange} placeholder="" required />
              </div>
              <div class="input-box">
                <span class="details">Password *</span>
                <input type="password" name="password" value={userData?.password} disabled={loading} onChange={handleChange} placeholder="" required />
              </div>
            </div>
            <div class="button">
              <input type="submit" disabled={loading} value="Register" />
            </div>
          </form>
          <div class="text-change">
            <h3>Do you have an account? <button onClick={() => useLogOrReg(prev => !prev)} type='button'>Login now</button></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
