import React, { useState } from 'react'
import { Form } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'

import { Link } from "react-router-dom";

const LoginForm = () => {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const loginUser = ({ serialized }) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: loginEmail, password: loginPassword })
    };

    fetch('http://localhost:3000/login', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));

    console.log({ email: loginEmail, password: loginPassword })
  }

  return (
    <Form action={loginUser}>
      <Input
        name="userEmail"
        type="email"
        label="Email"
        onChange={(event) => { setLoginEmail(event) }}
        required
      />
      <Input
        name="userPassword"
        type="password"
        label="Password"
        onChange={(event) => { setLoginPassword(event) }}
        required
      />

      <Button primary>Login</Button>
      <p>Don't have an account? Register <Link to="/register">here</Link>!</p>
    </Form>
  )
}

export default LoginForm