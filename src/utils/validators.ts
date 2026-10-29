export function validateName(name: string) {
  if (name.trim() === "") return "Full name is required";
  if (name.trim().length < 3) return "Full name must be at least 3 characters";
  return "";
}

export function validateEmail(email: string) {
  if (email.trim() === "") return "Email is required";
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email.trim())) return "Please enter a valid email";
  return "";
}

export function validatePassword(password: string) {
  if (password === "") return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  return "";
}

export function validateConfirm(confirm: string, password: string) {
  if (confirm === "") return "Please confirm your password";
  if (confirm !== password) return "Passwords do not match";
  return "";
}
