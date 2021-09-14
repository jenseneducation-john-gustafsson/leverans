import React from "react";
import { Form, Field } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <Form action={this.registerUser} onSubmitStart={this.props.onSubmitStart}>
        <Field.Group name="registerInfo">
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
          <Input
            name="firstName"
            label="First Name"
            required={({ get }) => {
              return !!get(["registerInfo", "lastName", "value"]);
            }}
          />
          <Input
            name="lastName"
            label="Last Name"
            required={({ get }) => {
              return !!get(["registerInfo", "firstName", "value"]);
            }}
          />
        </Field.Group>

        <Button primary type="submit">Register</Button>
        <p>Already have an account? Login <a href="#">here</a>!</p>
      </Form>
    );
  }
}