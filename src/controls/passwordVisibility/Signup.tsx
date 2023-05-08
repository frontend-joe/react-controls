import "./styles.css";
import bg from "./bg.svg";
import { useRef, useState } from "react";

type Props = {
  showPassword: boolean;
  toggleShowPassword: VoidFunction;
};

const Password = ({ showPassword, toggleShowPassword }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleShowPassword = () => {
    inputRef.current?.focus();
    toggleShowPassword();
  };

  return (
    <div className="textbox password">
      <input
        ref={inputRef}
        type={showPassword ? "text" : "password"}
        required
      />
      <label>Password</label>
      <span className="material-symbols-outlined"> lock </span>
      <button type="button" onClick={handleToggleShowPassword}>
        <span className="material-symbols-outlined">
          {showPassword ? "visibility_off" : "visibility"}
        </span>
      </button>
    </div>
  );
};

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <img className="clouds" src={bg} />
      <div className="signup">
        <h2>Login</h2>
        <h3>Welcome back Joe!</h3>
        <form className="form">
          <Password
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
          />
          <button type="submit">
            Login
            <span className="material-symbols-outlined"> arrow_forward </span>
          </button>
        </form>
      </div>
    </>
  );
};
