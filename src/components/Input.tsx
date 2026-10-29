import { useState } from "react";

type InputProps = {
  label: string;
  type?: string;
  value: string;
  error: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
};

function Input({
  label,
  type = "text",
  value,
  error,
  onChange,
  onBlur,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  let inputType = type;
  if (type === "password" && showPassword) {
    inputType = "text";
  }

  return (
    <div className="field">
      <label>
        {label}
        <div className="input-row">
          <input
            type={inputType}
            value={value}
            className={error ? "input-error" : ""}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
          />
          {type === "password" && (
            <button
              type="button"
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
        </div>
      </label>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Input;
