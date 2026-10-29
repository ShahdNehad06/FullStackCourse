import { useState } from "react";
import Input from "./Input";
import { useAuth } from "../context/useAuth";
import { validateEmail } from "../utils/validators";

type LoginFormProps = {
  goToProfile: () => void;
};

function LoginForm({ goToProfile }: LoginFormProps) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  function handleEmailChange(value: string) {
    setEmail(value);
    setEmailError("");
    setLoginError("");
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
    setPasswordError("");
    setLoginError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // check the inputs first
    const emailMessage = validateEmail(email);
    let passwordMessage = "";
    if (password === "") {
      passwordMessage = "Password is required";
    }

    setEmailError(emailMessage);
    setPasswordError(passwordMessage);
    if (emailMessage !== "" || passwordMessage !== "") {
      return;
    }

    // then try to login
    const message = login(email, password);
    if (message !== "") {
      setLoginError(message);
      return;
    }

    goToProfile();
  }

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      {loginError && <p className="error box">{loginError}</p>}

      <Input
        label="Email"
        type="email"
        value={email}
        error={emailError}
        onChange={handleEmailChange}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        error={passwordError}
        onChange={handlePasswordChange}
      />

      <button type="submit" className="primary">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
