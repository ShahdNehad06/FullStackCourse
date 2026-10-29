import { useState } from "react";
import Input from "./Input";
import { useAuth } from "../context/useAuth";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirm,
} from "../utils/validators";

function RegisterForm() {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  function setError(field: string, message: string) {
    setErrors({ ...errors, [field]: message });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess("");
    setRegisterError("");

    const newErrors = {
      name: validateName(name),
      email: validateEmail(email),
      password: validatePassword(password),
      confirm: validateConfirm(confirm, password),
    };
    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.password ||
      newErrors.confirm
    ) {
      return;
    }

    const message = register(name, email, password);
    if (message !== "") {
      setRegisterError(message);
      return;
    }

    setSuccess("Account created successfully! You are now signed in.");
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
  }

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <h2>Register</h2>

      {success && <p className="success">{success}</p>}
      {registerError && <p className="error box">{registerError}</p>}

      <Input
        label="Full name"
        value={name}
        error={errors.name}
        onChange={setName}
        onBlur={() => setError("name", validateName(name))}
      />
      <Input
        label="Email"
        type="email"
        value={email}
        error={errors.email}
        onChange={setEmail}
        onBlur={() => setError("email", validateEmail(email))}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        error={errors.password}
        onChange={setPassword}
        onBlur={() => setError("password", validatePassword(password))}
      />
      <Input
        label="Confirm password"
        type="password"
        value={confirm}
        error={errors.confirm}
        onChange={setConfirm}
        onBlur={() => setError("confirm", validateConfirm(confirm, password))}
      />

      <button type="submit" className="primary">
        Create account
      </button>
    </form>
  );
}

export default RegisterForm;
