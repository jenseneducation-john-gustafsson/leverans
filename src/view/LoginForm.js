import React, { useState } from 'react'
import { Form } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'

import { Link } from "react-router-dom";

const LoginForm = () => {

  const [loginMessage, setLoginMessage] = useState("")

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

        setLoginMessage({ loginMessage: data.message })

      });

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
      <p>Don't have an account? Register <Link to="/register">here</Link>!</p>
    </Form>
  )
}

export default LoginForm