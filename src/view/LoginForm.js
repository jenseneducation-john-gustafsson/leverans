import React, { useState } from 'react'
import { Form } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'

import { Link, Redirect } from "react-router-dom";

//Buy button reducer import
import { useDispatch, useSelector } from "react-redux";
import { authUsername, isAuthenticated } from "../store/authenticatedSlice";

const LoginForm = () => {

  const [loginMessage, setLoginMessage] = useState("")
  const [loggedIn, setLoggedIn] = useState()

  const [loginRedirect, setLoginRedirect] = useState()

  const dispatch = useDispatch();
  const emailState = useSelector((state) => state.authenticated.userEmail)

  const loggedInState = useSelector((state) => state.authenticated.loggedIn)

  const loginUser = ({ serialized }) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: serialized.userEmail, password: serialized.userPassword })
    };

    return fetch('/login', requestOptions)
      .then(response => response.json())
      .then(data => {

        console.log("Response login backend: ", data);

        setLoginMessage(data.message)
        setLoggedIn(data.auth)
        setLoginRedirect(<Redirect to="/" />)

        if (data.auth) {
          dispatch(authUsername(data));
          dispatch(isAuthenticated(data.auth));
        }

        if (loggedIn === true) {
          <div>{loginRedirect}</div>
        } else {
          <div>{loginMessage}</div>
        }

        console.log("check dispatch data: ", data)
        console.log("check reducer logged in: ", loggedInState)

      }).then(console.log("check reducer email: ", emailState));

  }

  return (
    <Form action={loginUser}>
      <Input
        name="userEmail"
        type="email"
        label="Email"
        required
      />
      <Input
        name="userPassword"
        type="password"
        label="Password"
        required
      />

      <Button primary>Login</Button>

      <br />
      <br />

      <h5><b>Don't have an account? Register <Link to="/register">here</Link>!</b></h5>

      <h3>{loginMessage}</h3>

      {loggedIn && loginRedirect}

    </Form>
  )
}

export default LoginForm