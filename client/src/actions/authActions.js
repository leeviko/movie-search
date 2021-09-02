import axios from "axios";
import { returnErrors } from "./errorActions";
import { 
  LOADING,
  USER_LOADED,
  AUTH_ERROR,
  AUTH_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from "./types";

export const isAuth = () => dispatch => {
  axios.get("/api/auth/isauth", { withCredentials: true })
    .then((res) => 
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data
      })  
    )
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const login = ({ name, password }) => dispatch => {
  dispatch({ type: LOADING });

  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const body = JSON.stringify({ name, password });

  axios.post("/api/auth", body, headers)
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
      dispatch({
        type: LOGIN_FAIL
      })
    })

}

export const register = ({ name, password }) => dispatch => {

  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const body = JSON.stringify({ name, password });

  axios.post("/api/users/register", body, headers)
    .then((res) => 
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })  
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
      dispatch({
        type: REGISTER_FAIL
      })
    })
}

export const logout = () => dispatch => {

  axios.delete("/api/auth/logout", { withCredentials: true })
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS
      })
    })
    .catch((err) => {
      console.log(err);
    })

}