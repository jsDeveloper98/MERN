import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHttp } from "../hooks/http-hook";
import { useMessage } from "../hooks/messages-hook";

const Auth = () => {
  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };

  const handleLogin = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      message(data.message);
    } catch (error) {}
  };

  return (
    <div className="container p-5">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          disabled={loading}
          onClick={handleLogin}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Auth;
