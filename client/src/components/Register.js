import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions"; 
import { clearErrors } from "../actions/errorActions"; 
import { Link, Redirect } from "react-router-dom";

import useForm from "../hooks/useForm";

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const error = useSelector(state => state.error)
  const [msg, setMsg] = useState(null)
  const [values, handleChange] = useForm({name: "", password: "", confirmPassword: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form">
      {isAuthenticated && <Redirect to="/" />}
      <div className="form-container">
        <h1 className="title">Luo tunnus</h1>
        <form onSubmit={(e) => handleSubmit(e)} >
          <label>Nimi</label>
          <input type="text" name="name" value={values.name} onChange={handleChange}/>
          <label>Salasana</label>
          <input type="password" name="password" value={values.password} onChange={handleChange}/>
          <label>Toista salasana</label>
          <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange}/>
          <button type="submit" className="form-btn">Luo tunnus</button>
        </form>
        <span>On jo käyttäjätunnus? <Link to="/kirjaudu-sisaan">Kirjaudu sisään</Link></span>
      </div>
    </div>
  )
}

export default Register
