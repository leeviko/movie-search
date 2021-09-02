import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions"; 
import { clearErrors } from "../actions/errorActions"; 
import { Link, Redirect } from "react-router-dom";

import useForm from "../hooks/useForm";

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const error = useSelector(state => state.error)
  const [msg, setMsg] = useState(null)
  const [values, handleChange] = useForm({name: "", password: ""});

  useEffect(() => {
    dispatch(clearErrors())
  }, [])

  useEffect(() => {
    error.id === "LOGIN_FAIL" ? setMsg(error.msg.msg) : setMsg(null)
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, password } = values;

    const user = {
      name,
      password
    }

    dispatch(login(user))

  }

  return (
    <div className="form">
      {isAuthenticated && <Redirect to="/" />}
      <div className="form-container">
        <h1 className="title">Kirjaudu Sisään</h1>
        <form onSubmit={(e) => handleSubmit(e)} >
          <label>Nimi</label>
          <input type="text" name="name" value={values.name} onChange={handleChange}/>
          <label>Salasana</label>
          <input type="password" name="password" value={values.password} onChange={handleChange}/>
          { msg ? <div className="alert">{msg}</div> : null }
          <button type="submit" className="form-btn">Kirjaudu Sisään</button>
        </form>
        <span>Eikö ole käyttäjätunnusta? <Link to="/rekisteroidy">Luo tunnus täältä</Link></span>
      </div>
    </div>
  )
}

export default Login
