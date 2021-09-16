import React, { useState } from 'react'
import { Form } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'

import { Link } from "react-router-dom";

const RegisterForm = () => {

  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const registerUser = ({ serialized }) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: inputEmail, password: inputPassword })
    };

    fetch('http://localhost:3000/signup', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));

    console.log({ email: inputEmail, password: inputPassword })
  }

  return (
    <Form action={registerUser}>
      <Input
        name="userEmail"
        type="email"
        label="Email"
        onChange={(event) => { setInputEmail(event) }}
        required
      />
      <Input
        name="userPassword"
        type="password"
        label="Password"
        onChange={(event) => { setInputPassword(event) }}
        required
      />
      <Input
        name="confirmPassword"
        type="password"
        label="Confirm password"
        required
        skip
      />

      <Button primary>Register</Button>
      <p>Already have an account? Login <Link to="/login">here</Link>!</p>
    </Form>
  )
}

export default RegisterForm
