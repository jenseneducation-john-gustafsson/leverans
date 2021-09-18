import React, { useState } from 'react'
import { Form } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'

import { Link } from "react-router-dom";

const RegisterForm = () => {


  const registerUser = ({ serialized }) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: serialized.userEmail, password: serialized.userPassword })
    };

    return fetch('/signup', requestOptions)
      .then(response => response.json())
      .then(data => {

        console.log("response log new user: ", data.message);

      });
  }

  return (
    <Form action={registerUser}>
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
